var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/coder', function(req, res, next) {
  res.render('coder', { title: 'Code' });
});


module.exports = router;
