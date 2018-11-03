var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "name" : "Logan",
      "age": 29
    },
    {
      "name": "Julia",
      "age": 21
    }
  ])
});

module.exports = router;
