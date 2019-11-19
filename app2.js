var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Event = require('./event');

var port = 8080;
var db = 'mongodb://localhost/example';

mongoose.Promise = global.Promise;
mongoose.connect(db);

pp.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) =>
  res.send('happy to be here'));

  app.get('/event', (req, res) => {
  console.log('getting all events');
  Event.find({})
    .exec((err, event) => {
      if(err) {
        res.send('error occured')
      } else {
        console.log(event);
        res.json(event);
    }
 })
});
