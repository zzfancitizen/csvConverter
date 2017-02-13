var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/csvConv', function(req, res, next) {
    res.render('csvConv', { title: 'Express' });
});

module.export = router;
