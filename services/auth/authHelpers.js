const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRequired(req, res, next) {
    console.log(`req.user`, req.user);
  if (!req.user) {
    return res.redirect('/auth/login');
  }

  return next();
}

module.exports = {
  comparePass,
  loginRequired,
};