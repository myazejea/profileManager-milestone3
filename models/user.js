var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a Schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address1: String,
  address2: String,
  City: String,
  State: String,
  zipCode: String,
  county: String
});

//Create a Model
mongoose.connect('mongodb://localhost/userFan', { useUnifiedTopology: true });

var User = mongoose.model('User', UserSchema);
//Change all studentInfo to user

module.exports = User;
