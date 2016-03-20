var Task = require('../models/task').Task;
var mongoose = require('../lib/mongoose');
var async = require('async');
var HttpError = require('../error').HttpError;

exports.get = function(req, res) {
  res.render('tasks');
}
exports.post = function(req, res, next) {
	var title = req.body.title;
  	var content = req.body.content;
    var unit = req.body.unit;
  	var right = req.body.right;
    var tasktype = req.body.tasktype;
    var answers = req.body.answers.split(",");
    console.log(typeof answers + answers[0]);
  	var task = new Task ({title: title, content: content, unit: unit, right: right, tasktype: tasktype, answers: answers});
  	task.save(function(err) {
  		if (err) { 
  			return next(new HttpError(403, err.message)); 
  			res.send(403);
  		}

  	})
  	console.log(task);
  	res.send({});
}