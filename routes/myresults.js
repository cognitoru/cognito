var Progress = require('../models/progress').Progress;
var mongoose = require('../lib/mongoose');
var async = require('async');

exports.get = function(req, res, next) {
  res.render('myresults');
}
exports.post = function(req, res, next) {
	var answer = req.body.answer;
  var taskID = req.body.taskID;
  res.send({});
}