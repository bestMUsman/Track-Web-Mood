const express = require('express');

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  res.json({ user: 'user profile page plcaeholder', userInfo: req.user});
});

module.exports = userRoutes;