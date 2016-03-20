var Task = require('../models/task').Task;
var Progress = require('../models/progress').Progress;
var mongoose = require('../lib/mongoose');
var async = require('async');
var HttpError = require('../error').HttpError;

exports.post = function(req, res, next) {
	var id = req.body.taskID;
  var answer = req.body.answer;
  var username = req.body.username;
  var wrongs = 0;
  var rights = 0;
  var unit = req.body.unit;
  var mark = 2;
  
  Task.find({_id: id}, function(err, tasks) {
      if (err) return next(err);
      var right = tasks[0].right;
      if (right == answer) {
        res.send({});
      } else {
        return next(new HttpError(403, "Ошибка!"));
      }
  });

}