var express = require('express');

var app = express();
var config = require('./config/database');
var passport = require('passport');
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));//This is middleware to use or get styles.css code to be used
app.use('/images', express.static('images'));
app.use('/DB', express.static('DB'));
app.use('/events',express.static('events'));

// var library = require('./routes/libraryNav.js');
// app.use('/library', library);


app.get('/', function(req,res){
  res.render('index', {fans: req.query});
});


app.get('/connection', function(req,res){
  res.render('connection');
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/about', function(req,res){
  res.render('about');
});

app.get('/events', function(req, res){
  res.render('events');
})

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
