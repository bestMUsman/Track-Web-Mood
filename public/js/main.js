// ======================================================
// Pie Chart Starts
// ======================================================
console.log("woking");

// function changePieChartValues(joy, sadness, fear, anger, disgust) {
//  $(".joy-percentage").attr({
//         "data-percent" : joy
//     });
//   $(".sadness-percentage").attr({
//         "data-percent" : sadness
//     });
//   $(".fear-percentage").attr({
//         "data-percent" : fear
//     });
//   $(".anger-percentage").attr({
//         "data-percent" : anger
//     });
//   $(".disgust-percentage").attr({
//         "data-percent" : disgust
//     });

// }

$(".joy-percentage").easyPieChart({
  animate: 1000,
  lineWidth: 5,
  barColor: "#fff",
  trackColor: "rgba(0,0,0,.5)",
  scaleColor: "#aaaaaa",
  onStep: function(value) {
    this.$el.find("span").text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find("span").text(Math.round(to));
  },
});

$(".sadness-percentage").easyPieChart({
  animate: 1000,
  lineWidth: 5,
  barColor: "#fff",
  trackColor: "rgba(0,0,0,.5)",
  scaleColor: "#aaaaaa",
  onStep: function(value) {
    this.$el.find("span").text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find("span").text(Math.round(to));
  },
});

$(".fear-percentage").easyPieChart({
  animate: 1000,
  lineWidth: 5,
  barColor: "#fff",
  trackColor: "rgba(0,0,0,.5)",
  scaleColor: "#aaaaaa",
  onStep: function(value) {
    this.$el.find("span").text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find("span").text(Math.round(to));
  },
});

$(".anger-percentage").easyPieChart({
  animate: 1000,
  lineWidth: 5,
  barColor: "#fff",
  trackColor: "rgba(0,0,0,.5)",
  scaleColor: "#aaaaaa",
  onStep: function(value) {
    this.$el.find("span").text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find("span").text(Math.round(to));
  },
});

$(".disgust-percentage").easyPieChart({
  animate: 1000,
  lineWidth: 5,
  barColor: "#fff",
  trackColor: "rgba(0,0,0,.5)",
  scaleColor: "#aaaaaa",
  onStep: function(value) {
    this.$el.find("span").text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find("span").text(Math.round(to));
  },
});

// console.log(moodValues);
// pie chart ends

// ======================================================
// Radar Chart
// ======================================================

// Radar Chart Options
var empotionRadarOptions = {
  //Boolean - If we show the scale above the chart data
  scaleOverlay: false,

  //Boolean - If we want to override with a hard coded scale
  scaleOverride: false,

  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps: null,
  //Number - The value jump in the hard coded scale
  scaleStepWidth: null,
  //Number - The centre starting value
  scaleStartValue: null,

  //Boolean - Whether to show lines for each scale point
  scaleShowLine: true,

  //String - Colour of the scale line
  scaleLineColor: "white",

  //Number - Pixel width of the scale line
  scaleLineWidth: 1,

  //Boolean - Whether to show labels on the scale
  scaleShowLabels: false,

  //Interpolated JS string - can access value
  scaleLabel: "<%=value%>",

  //String - Scale label font declaration for the scale label
  scaleFontFamily: "'Arial'",

  //Number - Scale label font size in pixels
  scaleFontSize: 7,

  //String - Scale label font weight style
  scaleFontStyle: "normal",

  //String - Scale label font colour
  scaleFontColor: "#666",

  //Boolean - Show a backdrop to the scale label
  scaleShowLabelBackdrop: true,

  //String - The colour of the label backdrop
  scaleBackdropColor: "rgba(255,255,255,0.75)",

  //Number - The backdrop padding above & below the label in pixels
  scaleBackdropPaddingY: 2,

  //Number - The backdrop padding to the side of the label in pixels
  scaleBackdropPaddingX: 2,

  //Boolean - Whether we show the angle lines out of the radar
  angleShowLineOut: true,

  //String - Colour of the angle line
  angleLineColor: "rgba(255,255,255,0.3)",

  //Number - Pixel width of the angle line
  angleLineWidth: 1,

  //String - Point label font declaration
  pointLabelFontFamily: "'Arial'",

  //String - Point label font weight
  pointLabelFontStyle: "normal",

  //Number - Point label font size in pixels
  pointLabelFontSize: 12,

  //String - Point label font colour
  pointLabelFontColor: "#EFEFEF",

  //Boolean - Whether to show a dot for each point
  pointDot: true,

  //Number - Radius of each point dot in pixels
  pointDotRadius: 3,

  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth: 1,

  //Boolean - Whether to show a stroke for datasets
  datasetStroke: true,

  //Number - Pixel width of dataset stroke
  datasetStrokeWidth: 1,

  //Boolean - Whether to fill the dataset with a colour
  datasetFill: true,

  //Boolean - Whether to animate the chart
  animation: true,

  //Number - Number of animation steps
  animationSteps: 60,

  //String - Animation easing effect
  animationEasing: "easeOutQuart",

  //Function - Fires when the animation is complete
  onAnimationComplete: null,
};

let emotionDataValues = [50, 59, 90, 81, 56];

function changeRadarChartValues(joy, fear, disgust, anger, sadness) {
  emotionDataValues[0] = joy;
  emotionDataValues[1] = fear;
  emotionDataValues[2] = disgust;
  emotionDataValues[3] = anger;
  emotionDataValues[4] = sadness;
}

let angerValue = document.getElementById("angerValue").getAttribute("data");
let disgustValue = document.getElementById("disgustValue").getAttribute("data");
let fearValue = document.getElementById("fearValue").getAttribute("data");
let joyValue = document.getElementById("joyValue").getAttribute("data");
let sadnessValue = document.getElementById("sadnessValue").getAttribute("data");

// console.log('angry: ' + angerValue);
// console.log('disgust: ' + disgustValue);
// console.log('fear: ' + fearValue);
// console.log('joy: ' + joyValue);
// console.log('sadness: ' + sadnessValue);

changeRadarChartValues(
  joyValue,
  fearValue,
  disgustValue,
  angerValue,
  sadnessValue
);

// Radar Data
var emotionRadarData = {
  labels: ["Joy", "Fear", "Disgust", "Anger", "Sadness"],
  datasets: [
    {
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,1)",
      data: emotionDataValues,
    },
  ],
};

//Get the context of the Radar Chart canvas element we want to select
var emotion = document.getElementById("emotionRadarChart").getContext("2d");

// Create the Radar Chart
var emotionRadar = new Chart(emotion).Radar(
  emotionRadarData,
  empotionRadarOptions
);

// Radar Chart Ends

// console.log(JSON.stringify(tone.document_tone.tone_categories[0].tones, null, 2));
