var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Codecademy Projects' });
});

router.get('/Adoptly', function(req, res, next){
   res.render('Adoptly', { title: 'Adoptly Website'}); 
});

module.exports = router;
