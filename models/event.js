var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a Schema
var EventSchema = new Schema({
  name: String,
  details: String,
  time: String,
  going: String
});
//Create a Model
mongoose.connect('mongodb://localhost/userFan', { useUnifiedTopology: true });

var Event = mongoose.model('event', EventSchema);

module.exports = Event;
