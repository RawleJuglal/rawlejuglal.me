var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp Projects' });
});

router.get('/SlotMachine', function( req, res, next){
    res.render('freecodecamp/SlotMachine', { title: 'Slot Machine Website'});
});

router.get('/RandomQuoteMachine', function( req, res, next){
  res.render('freecodecamp/RandomQuoteMachine', { title: 'Wrestling Quote Website'});  
});

module.exports = router;