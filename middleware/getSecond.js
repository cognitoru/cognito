var mongoose = require('../lib/mongoose');
var Task = require('../models/task').Task;

module.exports = function(req, res, next) {
  var counter;
  if (!req.body.counter) {
    counter = 0;
  } else {
    counter = req.body.counter;
  }
    req.counter = res.locals.counter = counter;
    next();
}