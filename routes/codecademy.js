var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Codecademy Projects' });
});

router.get('/Adoptly', function(req, res, next){
   res.render('codecademy/Adoptly', { title: 'Adoptly Website'}); 
});

router.get('/Airbnb', function(req, res, next){
    res.render('codecademy/AirBnB', { title: 'AirBnB Website'}); 
});

router.get('/Armando', function(req, res, next){
    res.render('codecademy/Armando', { title: 'Armando Website'}); 
});

router.get('/ArticleShift', function(req, res, next){
    res.render('codecademy/ArticleShift', { title: 'Article Shift Website'});
});

router.get('/Bass', function(req, res, next){
    res.render('codecademy/Bass', { title: 'Bass Website'});    
});

module.exports = router;
