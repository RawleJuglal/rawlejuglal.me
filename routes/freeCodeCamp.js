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

router.get('/Calculator', function( req, res, next){
  res.render('freecodecamp/Calculator', { title: 'Calculator Website'});
});

router.get('/Weather', function( req, res, next){
  res.render('freecodecamp/Weather', { title: 'Local Weather App'});
});

router.get('/PomodoroClock', function( req, res, next){
  res.render('freecodecamp/PomodoroClock', { title: 'Pomodoro Clock'});
});

router.get('/Simon', function( req, res, next){
  res.render('freecodecamp/Simon', { title: 'Simon Says'});
});

router.get('/CamperNews', function( req, res, next){
  res.render('freecodecamp/CamperNews', { title: 'Camper News Site'});  
});

module.exports = router;