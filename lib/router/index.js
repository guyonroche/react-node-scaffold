'use strict';
var express = require('express');

var router = express.Router();

router.get('/hello/:name', (req,res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});


module.exports = router;