const express = require('express');
const controller = require('../controllers/webmoodController');
const authHelpers = require('../services/auth/authHelpers');
        
const webmoodRoutes = express.Router();

webmoodRoutes.get('/', controller.index);
webmoodRoutes.get('/webmood/add', authHelpers.loginRequired, (req, res) => {
  res.render('webmood/webmood-add', {
    message: 'this is working',
  });
});
webmoodRoutes.get('/webmood/edit/:id', authHelpers.loginRequired, controller.edit);
webmoodRoutes.get('/webmood/:id', controller.show);
webmoodRoutes.post('/', authHelpers.loginRequired, controller.create);
webmoodRoutes.put('/webmood/:id', authHelpers.loginRequired, controller.update);
webmoodRoutes.delete('/webmood/:id', authHelpers.loginRequired, controller.destroy);

module.exports = webmoodRoutes;