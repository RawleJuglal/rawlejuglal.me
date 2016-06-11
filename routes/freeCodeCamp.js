var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp Projects' });
});

router.get('/SlotMachine', function( req, res, next){
    res.render('codecademy/SlotMachine', { title: 'Slot Machine Website'});
});

module.exports = router;