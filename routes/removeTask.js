var Task = require('../models/task').Task;
var mongoose = require('../lib/mongoose');
var async = require('async');
var HttpError = require('../error').HttpError;

exports.post = function(req, res, next) {
	var id = req.body.taskID;
  	console.log(id)
  	Task.remove({_id: id}, function(err, tasks) {
    	if (err) throw err;
    	//console.log(tasks)
    	res.send({});
  	})
}