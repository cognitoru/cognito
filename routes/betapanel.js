var Task = require('../models/task').Task;
var HttpError = require('../error').HttpError;

exports.get = function(req, res) {
  res.render('betapanel');
}