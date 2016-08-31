var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var HeadParser = require(process.cwd()+'/public/javascripts/freecodecamp/headParser.js');
var URLShortener = require(process.cwd()+'/public/Modules/urlShortener.module.js');
var UnixConverter = require(process.cwd()+'/public/Modules/unixConverter.module.js');
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

router.get('/s/:short', function(req, res){
  ShortURL.findOne({short_id:req.params.short}, function(err, shortUrl){
    if(err) res.send('Invalid url');
    else res.redirect('http://'+shortUrl.long_url);
  });
});

router.get('/fileMetaData', function(req, res){
  res.render('freecodecamp/fileMetaData', { title: 'File MetaData Microservice'});
});

router.post('/readfile', upload.single('file'), function(req,res){
		res.json({"size":req.file.size + "bytes"});
});

router.get('/unixTimeStamp', function(req, res){
  res.render('freecodecamp/unixTimeStamp', { title: 'Unix TimeStamp Converter'});
});

router.get('/convert/:userInput', function(req, res){
  var resObj = UnixConverter.unixHandler(req.params.userInput);
  res.json(resObj);
});

router.get('/isal', function(req, res){
  res.render('freecodecamp/isal', { title: 'Image Search Abstraction Layer'});
});

module.exports = router;