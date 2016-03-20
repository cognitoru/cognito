var Task = require('../models/task').Task;
var mongoose = require('../lib/mongoose');
var async = require('async');

exports.get = function(req, res, next) {
  res.render('taskpage');
}
exports.post = function(req, res, next) {
	var answer = req.body.answer;
  var taskID = req.body.taskID;
  res.send({});
}