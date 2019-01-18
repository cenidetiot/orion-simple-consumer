var express = require('express');
var router = express.Router();

router.get('/entities', function(req, res, next) {
  res.render('index', { entities: {} });
});

router.post('/notify', function(req, res, next) {
  res.status(200).send("OK");
});

module.exports = router;
