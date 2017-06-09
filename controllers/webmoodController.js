const Webmood = require('../models/webmood');

const controller = {};

controller.index = (req, res) => {
let userInfo = req.user;
  Webmood.findAll()
    .then(webmood => {
      res.render('webmood/webmood-index', {
        message: 'this is working',
        webmood: webmood,
        user: userInfo,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.show = (req, res) => {
  Webmood.findById(req.params.id)
    .then(webmood => {
      res.render('webmood/webmood-single', {
        webmood: webmood,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.create = (req, res) => {
  Webmood.create({
    name: req.body.name,
    urllink: req.body.urllink,    
  })
    .then(webmood => {
      res.redirect('/');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.edit = (req, res) => {
  Webmood.findById(req.params.id)
    .then(webmood => {
      res.render('webmood/webmood-edit', {
        webmood: webmood,
        id: req.params.id,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.update = (req, res) => {
  Webmood.update(
    {
      name: req.body.name,
      urllink: req.body.urllink,
    },
    req.params.id
  )
    .then(webmood => {
      res.redirect('/');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.destroy = (req, res) => {
  Webmood.destroy(req.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;