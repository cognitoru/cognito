var mongoose = require('../lib/mongoose');
var Task = require('../models/task').Task;

module.exports = function(req, res, next) {

	//console.log(Task);
  var unit = req.params.unit;
  req.tasks = res.locals.tasks = null;
  Task.find({unit: unit}, function(err, tasks) {
      if (err) return next(err);
      req.tasks = res.locals.tasks = tasks;
      //console.log(tasks);
      
      next();
  });

}