var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('angTutorial/index', { title: 'Phone Catalog' });
});

module.exports = router;
