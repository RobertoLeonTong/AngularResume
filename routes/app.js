var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

module.exports = router;
