var localStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var config = require('../config/database');
var bcrypt = require('bcryptjs');

module.exports = function(passport){
  passport.use(new LocalStrattegy(function(username, password, done){
    let query = {username: username};
    User.findOne(query, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'No user found'});
      }
      bcrypt.compare(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        }else{
          return done(null, false, {'Wrong password'});
        }
      });
    });
  }));
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    });
  });
}
