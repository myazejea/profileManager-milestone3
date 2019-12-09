var express = require('express');
var User = require('./models/user');

var app = express();
var config = require('./config/database');
var ConnectDB = require('./DB/connectDB');
var mongodb = require('mongodb');
var count = 0;
var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/userFan', { useUnifiedTopology: true });
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

app.get('/signup', function(req, res){
    res.render('signup', {prefilled:"", readOnly:"", count: count, action: "/saveNewUser"});
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
app.get('/savedUser', function(req, res){
  res.render('savedUser', {data: data});
});

app.get('/events/:id', function(req,res){
  res.render('event', {data: data.getById(req.params.id)});
});



app.post('/events/:id/status', function(req,res){
  status = data.getById(req.params.id);
  status["going"] = req.body.button;
  console.log(status);
  res.redirect('/savedEvents');
  console.log(status);
});

app.get('/savedEvent/:id', function(req, res){
  res.render('savedEvent', {data: data.getById(req.params.id)});
});

app.post('/savedEvent/:id/status', function(req,res){
  status = data.getById(req.params.id);
  status["going"] = req.body.button;
  console.log(status);
  res.redirect('/savedEvents');
  console.log(status);
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/about', function(req,res){
  res.render('about');
});

count++;

app.get('/login', function(req, res){
  res.render('login');
});

app.get('/signup', function(req, res){
  res.render('signup');
});
app.get('/savedUser/:id', function(req,res){
  res.render('savedUser', {data: data.getById(req.params.id)});
});

app.post('/signup', urlencodedParser, async function(req, res){
  var users = new User({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    county: req.body.county
  });
  //find if student with this firstName and lastName is in the database
  //if they are then call findOneAndUpdate
  //if they are not then save


  await users.save(function(data){
    //assert(data.isNew === false);
    res.redirect('/savedUser')

  });

// app.post('/signup', (req, res)=> {
//   var login = new User({
//     firstName: req.body.firstname,
//     lastName: req.body.lastname,
//     password: req.body.password,
//     email: req.body.email
//   });
//   console.log(login);

  login.save(function(data){
    console.log(data);
    res.redirect('/login')
  });

});
app.post('/login', function(req, res){
  req.session.email = req.body.email;
  req.session.password = req.body.password;
  res.end('done');
});
app.get('/', function( req, res){
  if(req.session.email){
    res.redirect('/logged');
  }else{
    res.render('index.ejs');
    }
});
app.get('/logged', function(req, res){
  if(req.session.email){
    res.write("<h1>User Logged In</h1><a href='/logout'>Logout</a>");
    res.end();
  }else{
    res.write("<h1>User Logged In</h1><a href='/logout'>Logout</a>");
    res.end();
  }
});
app.get('/logout', function(req, res){
  req.session.destroy(function(err){
    if(err){
      res.nogotiate(err);
    }
    res.redirect('/');
  });
});

var library = require('./routes/libraryNav.js');
app.use('/library', library);
//app.get('/', function(req,res){
  //res.send('This is a tough homepage!');
//});
app.listen(3000);
console.log('app started')
    console.log('listening on port 3000')
