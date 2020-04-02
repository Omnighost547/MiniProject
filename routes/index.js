var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
var googleScripts = require('../public/javascripts/google-api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MediaTap' });
});

router.get('/bike', function(req, res, next) {
  var link = googleScripts.getBlog;
  res.render('bike', { title: 'bike', blog_url: link });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome Home.' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in' });
});

router.get('/login/submit', function(req, res, next) {
  var result = [];
  var user= {
    name: req.body.name,
    password: req.body.password
  };
  var db = client.db("Users");
  MongoClient.connect(url, function (err, client) {
    console.log("Connected");
    if(err) throw err;
    var cursor = db.collection('Users').find();
    str = "";
    cursor.forEach(function(doc, err) {
      if(err) throw err;
      result.push(doc);
    }, function() {
      client.close();
      res.render('index');
    });
  });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.post('/signup/submit', function(req, res, next) {
  var user= {
    name: req.body.name,
    password: req.body.password
  };

  MongoClient.connect(url, function (err, client) {
    var db = client.db("Users");
    console.log("Connected");
    if(err) throw err;
    db.collection('Users').insertOne(user, function (err, result) {
      if(err) throw err;
      console.log('User created');
      client.close();
    });
  });
  res.redirect('/');
});

module.exports = router;
