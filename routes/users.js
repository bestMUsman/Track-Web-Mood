const express = require('express');

const userRoutes = express.Router();

// userRoutes.get('/', (req, res) => {
//   res.json({ user: 'user profile page plcaeholder', userInfo: req.user});
// });


userRoutes.get('/', (req, res) => {
  if (req.user !== undefined ) {
    
  res.render('users/user-profile', {
    message: 'User Profile Page',
    userInfo: req.user,    
  });
  } else {
    res.redirect('/auth/login');
  }
});


module.exports = userRoutes;