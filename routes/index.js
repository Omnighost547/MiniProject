var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/EmployeeDB';

//Creating and closing a connection to a MongoDB database
MongoClient.connect(url, function (err, db) {
  console.log("Connected");
  db.close();
});

//Querying for data in a MongoDB database
MongoClient.connect(url, function (err, db) {
  var cursor = db.collection('Employee').find();

  cursor.each(function(err, doc) {

    console.log(doc);

  });
});

//Insert document into collection
MongoClient.connect(url, function(err, db) {

  db.collection('Employee').insertOne({
    Employeeid: 4,
    EmployeeName: "NewEmployee"
  });
});

//Update documents in collection
MongoClient.connect(url, function(err, db) {

  db.collection('Employee').updateOne({
    "EmployeeName": "NewEmployee"
  }, {
    $set: {
      "EmployeeName": "Mohan"
    }
  });
});

//Delete documents in collection
MongoClient.connect(url, function(err, db) {

  db.collection('Employee').deleteOne(

      {
        "EmployeeName": "Mohan"
      }

  );
});

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
