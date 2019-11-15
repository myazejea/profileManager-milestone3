var express = require('express');
var connectDB = require('../DB/connectDB');
var connect = require('../model/connect');
var createError = require('http-errors');
var router = express.Router();
let error = express.Router(1);

router.get('/events', function(req, res, next){
  res.render('events', {title: 'Events'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/connections', function(req, res, next) {
  let connections = [];
  let status = null;
  // get the topics from ConnectionDb
  let topics = new ConnectDB().getTopics();

  // getting all connections from db and creating Connection data object and pushing to array.
  new ConnectDB().getConnections().forEach(connection => {
    connections.push(new Connection(connection.connectionId, connection.name, connection.topic,connection.details, connection.location, connection.host, connection.date, connection.startTime, connection.endTime ));
  });

  if (error.length > 0){
    status = error.pop();
  }

  let data = {
    "topics": topics,
    "connections": connections,
    "status":status
  };

  res.render('connections', { data: data });
});



router.get('/connection/:connectionId', function(req, res, next) {
  let connectionId = req.params.connectionId;
  let connection;
  // validate data
  if (validateConnectionId(connectionId)){
    try{
      // getting specific connection from DB
      connection = new ConnectionDB().getConnection(connectionId);
      // creating connection data object
      connection = new Connection(connection.connectionId, connection.name, connection.topic,connection.details, connection.location, connection.host, connection.date, connection.startTime, connection.endTime );

      let data = {
        "connection": connection
      };

      console.log(data);
      res.render('connection', { data: data });
    } catch (e) {
      error.push(404);
      res.redirect('/connections');
    }
  } else{
    error.push(400);
    res.redirect('/connections');
  }


});

router.get('/myConnections', function (req, res, next) {
  res.render('savedConnections',{ title: 'Home', theUser: "Norm" });
});

router.get('/newConnection', function (req, res, next) {
  res.render('newConnection', {title: 'Home',theUser: "Norm"});

});
router.get('/about', function (req, res, next) {
  res.render('about',{ title: 'Home' });
});
router.get('/contact', function (req, res, next) {
  res.render('contact',{ title: 'Home' });
});


function validateConnectionId(connectionId) {
  console.log(connectionId);
  if (connectionId !== undefined) {
    console.log(connectionId);
    if (Number.isInteger(Number.parseInt(connectionId))) {
      console.log(connectionId);
      return true;
    } else{
      return false;
    }
  } else{
    return false;
  }
}


module.exports = router;
