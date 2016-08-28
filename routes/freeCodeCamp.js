var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var HeadParser = require(process.cwd()+'/public/javascripts/freecodecamp/headParser.js');
var URLShortener = require(process.cwd()+'/public/Modules/urlShortener.module.js');
var ShortURL = require('../models/shortUrl.js');

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

router.get('/urlShortener', function(req, res){
  res.render('freecodecamp/urlShortener', { title: 'Url Shortener Site'});
});

router.get('/urlShortener/:userUrl', function(req, res){
  if(URLShortener.checkValidUrl(req.params.userUrl))
    {
      var UserUrl = req.params.userUrl;
      var randNbr = URLShortener.assignRanNbr();
      ShortURL.create(URLShortener.createUrlObj(UserUrl, randNbr), function (err, smallUrl) {
        if (err) return console.log(err);
        else res.json(smallUrl);
      });
    }
  else
    {
      res.send('Invalid url');
    }
});

router.get('/:short', function(req, res){
  if(randNbr == req.params.short)
    {
      res.redirect(userUrl);
    }
  else
    {
      res.send('Not the correct shortcut');
    }
});

module.exports = router;