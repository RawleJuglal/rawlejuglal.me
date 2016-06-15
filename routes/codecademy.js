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

router.get('/BestBite', function(req, res, next){
    res.render('codecademy/BestBite', { title: 'Best Bite Website'}); 
});

router.get('/Bolt', function( req, res, next){
    res.render('codecademy/Bolt', { title: 'Bolt Website'});    
});

router.get('/Broadway', function( req, res, next){
    res.render('codecademy/Broadway', { title: 'Broadway Website'});    
});

router.get('/Excursion', function( req, res, next){
    res.render('codecademy/Excursion', { title: 'Excursion Website'}); 
});

router.get('/Headlines', function( req, res, next){
    res.render('codecademy/Headlines', { title: 'Headlines Website'}); 
});

router.get('/Innovation', function( req, res, next){
   res.render('codecademy/Innovation', { title: 'Innovation Website'}); 
});

router.get('/Junction', function( req, res, next){
    res.render('codecademy/Junction', { title: 'Junction Website'}); 
});

router.get('/Move', function( req, res, next){
    res.render('codecademy/Move', { title: 'Move Website'});    
});

router.get('/Newsroom', function( req, res, next){
    res.render('codecademy/Newsroom', { title: 'Newsroom Website'});    
});

router.get('/Pocketbook', function( req, res, next){
    res.render('codecademy/Pocketbook', { title: 'Pocketbook Website'}); 
});

router.get('/RedEyePhotography', function( req, res, next){
    res.render('codecademy/RedEyePhotography', { title: 'Red Eye Photography Website'}); 
});

router.get('/Shutterbugg', function( req, res, next){
    res.render('codecademy/Shutterbugg', { title: 'Shutterbugg Website'});
});

router.get('/FlipBoard', function( req, res, next){
    res.render('codecademy/FlipBoard', { title: 'Flipboard Website'}); 
});

router.get('/SlotMachine', function( req, res, next){
    res.render('codecademy/SlotMachine', { title: 'Slot Machine Website'});
});

router.get('/StatusPost', function( req, res, next){
    res.render('codecademy/StatusPost', { title: 'Status Post Website'});
});

module.exports = router;
