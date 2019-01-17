var express = require('express');
var router = express.Router();
var ocb = require("ocb-sender");
var ngsi = require("ngsi-parser");

ocb.config('http://35.185.120.11:1026/v2')
.then((result) => console.log(result))
.catch((err) => console.log(err));

router.get('/entities', function(req, res, next) {
  console.log(req.query)
  let query = ngsi.createQuery({
    "id":"Room.*",
    "type":"Room",
    "options":"keyValues",
   "temperature" : req.query.temperature
  })
  ocb.getWithQuery(query)
  .then((result) => {
    res.render('index', { entities: result.body });
  })
  .catch((err) => {
    res.render('index', { entities: {} });
  })
});

router.post('/notify', function(req, res, next) {
  console.log(req.body.data[0]);
  res.status(200).send("OK");
});

module.exports = router;
