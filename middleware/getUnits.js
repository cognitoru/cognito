var mongoose = require('../lib/mongoose');
var Unit = require('../models/unit').Unit;

module.exports = function(req, res, next) {

  	req.units = res.locals.units = null;
  	Unit.find({}, function(err, units) {
	  	if (err) return next(err);
	  	req.units = res.locals.units = units;
  		
  		next();
  	});

}