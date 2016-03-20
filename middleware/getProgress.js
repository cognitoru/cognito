var mongoose = require('../lib/mongoose');
var Progress = require('../models/progress').Progress;

module.exports = function(req, res, next) {
  	req.progresses = res.locals.progresses = null;
  	Progress.find({}, function(err, progresses) {
	  	if (err) return next(err);
	  	req.progresses = res.locals.progresses = progresses;
	  	console.log(res.locals.progresses);
  		next();
  	});

}