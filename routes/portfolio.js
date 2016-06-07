var express = require('express');
var router = express.Router();


router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Rawle Juglal Portfolio' });
});

module.exports = router;