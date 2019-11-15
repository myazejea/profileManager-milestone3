

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('fans route to main page ');
});


router.get('/fans', function(req, res){

  var fansModel = require('./../models/fans');

  fansModel = fansModel.fans("Submissions", "Striking", "Wrestling", "All3");
    console.log(Object.keys(fansModel));
  res.render('fansView', {fans: fansModel});
});
//dynamic request
router.get('/*', function(req, res){
  res.send('fans error 404');
});


module.exports = router;
