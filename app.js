const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

require("dotenv").config();

const app = express();

const webmoodRoutes = require("./routes/webmood");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`working with this port: ${PORT}`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// =============================================

var request = require("request");
var watson = require("watson-developer-cloud");
var htmlToText = require("html-to-text");

const api_userName = process.env.api_username;
const api_password = process.env.api_password;
var tone_analyzer = watson.tone_analyzer({
  username: api_userName,
  password: api_password,
  version: "v3",
  version_date: "2016-05-19",
});

function getMood(text, cb) {
  // console.log(text);
  console.log("this is what is being passed=> ", text);

  tone_analyzer.tone(
    {
      text: text,
    },
    function(err, tone) {
      if (err) {
        console.log(err);
      } else {
        cb(tone);
      }
    }
  );
}

function changeHtmlToText(text, cb) {
  getMood(htmlToText.fromString(text), cb);
}

function getResult(urlLink, cb) {
  request(urlLink, function(error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      // cb(error);
      cb("Sorry The Url Is Not Valid!");
    } else {
      changeHtmlToText(body, cb);
      // getMood(body, cb);
    }
  });
}

app.get("/getmood", function(req, res) {
  let userLoggedIn = false;
  let userInfo = "";
  if (req._passport.session == undefined || Object.keys(req._passport.session).length == 0) {
      userLoggedIn = false;  
  } else {
    userLoggedIn = true;
    userInfo = req.user;
  }
  let url = req.query.text;
  getResult(url, function(json) {
    console.log('userLoggedIn: ', userLoggedIn);
    console.log('req._passport.session: ', req._passport.session);
    
    res.render("webmood/result", {
      tone: json,
      text: url,
      userLoggedIn: userLoggedIn,
      userInfo: userInfo,
    });
  });
});

app.use("/", webmoodRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.get("*", function(req, res) {
  res.status(404).render("webmood/not-found", {
    message: "this is working",
  });
});
