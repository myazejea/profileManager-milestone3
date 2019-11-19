var express = require('express');

var app = express();
var config = require('./config/database');
var ConnectDB = require('./DB/connectDB');
var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
data = new ConnectDB()
app.use('/assets', express.static('assets'));//This is middleware to use or get styles.css code to be used
app.use('/images', express.static('images'));
app.use('/DB', express.static('DB'));
app.use('/events',express.static('events'));
app.use(bodyParser.urlencoded({ extended: false }))

// var library = require('./routes/libraryNav.js');
// app.use('/library', library);

app.get('/', function(req,res){
  res.render('index', {fans: req.query});
});

app.get('/events', function(req,res){
  res.render('allEvents', {data: data.getEvents()});
});

app.get('/newEvent', function(req,res){
  res.render('newEvent', {data: data});
});

app.get('/savedEvents', function(req,res){
  res.render('savedEvent', { data: data });
});

app.get('/events/:id', function(req,res){
  res.render('event', {data: data.getById(req.params.id)});
});

app.post('/events/:id/status', function(req,res){
  status = data.getById(req.params.id);
  status["going"] = req.body.button;
  console.log(status)
  res.redirect('/savedEvents');
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/about', function(req,res){
  res.render('about');
});

app.get('/login', function(req, res){
  res.render('login');
});

app.get('/signup', function(req, res){
  res.render('signup');
});
//
// app.get('/fans', function(req, res){
//   res.render('fans');
// });
//
// app.get('/*',function(req, res){
//    res.send("Error 404");
// });

var library = require('./routes/libraryNav.js');
app.use('/library', library);
//app.get('/', function(req,res){
  //res.send('This is a tough homepage!');
//});
app.listen(3000);
console.log('app started')
    console.log('listening on port 3000')
