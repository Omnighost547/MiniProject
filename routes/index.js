var express = require('express');
var router = express.Router();
const mongo = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MediaTap' });
});

router.get('/bike', function(req, res, next) {
  res.render('bike', { title: 'bike' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome Home.' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in' });
});

router.post('/login/submit', function(req, res, next) {
  var name = req.body.id;
  var password = req.body.id;
  res.redirect('/home');
});

module.exports = router;
