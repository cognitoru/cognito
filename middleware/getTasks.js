var mongoose = require('../lib/mongoose');
var Task = require('../models/task').Task;

module.exports = function(req, res, next) {

	//console.log(Task);
  	req.tasks = res.locals.tasks = null;
  	req.uri = res.locals.uri = null;
  	Task.find({}, function(err, tasks) {
	  	if (err) return next(err);
	  	req.tasks = res.locals.tasks = tasks;
	  	//console.log(res.locals.tasks);
  		
  		next();
  	});

}