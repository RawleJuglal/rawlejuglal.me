var express = require('express');
var router = express.Router();
var HeadParser = require(process.cwd()+'/public/javascripts/freecodecamp/headParser.js');

var headParser = new HeadParser();

router.get('/', function(req, res) {
  res.render('index', { title: 'FreeCodeCamp Projects' });
});

router.get('/SlotMachine', function( req, res){
    res.render('freecodecamp/SlotMachine', { title: 'Slot Machine Website'});
});

router.get('/RandomQuoteMachine', function( req, res){
  res.render('freecodecamp/RandomQuoteMachine', { title: 'Wrestling Quote Website'});  
});

router.get('/Calculator', function( req, res){
  res.render('freecodecamp/Calculator', { title: 'Calculator Website'});
});

router.get('/Weather', function( req, res){
  res.render('freecodecamp/Weather', { title: 'Local Weather App'});
});

router.get('/PomodoroClock', function( req, res){
  res.render('freecodecamp/PomodoroClock', { title: 'Pomodoro Clock'});
});

router.get('/Simon', function( req, res){
  res.render('freecodecamp/Simon', { title: 'Simon Says'});
});

router.get('/TicTacToe', function( req, res){
  res.render('freecodecamp/TicTacToe', { title: 'Unbeatable Tic Tac Toe'});
});

router.get('/WikiViewer', function( req, res){
  res.render('freecodecamp/WikiViewer', { title: 'Wiki Viewer Site'});
});

router.get('/headerParser', function(req, res){
  var headerObject = headParser.headObj(req.headers);
  res.send(headerObject);
});

module.exports = router;