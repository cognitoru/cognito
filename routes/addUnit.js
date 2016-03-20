var Unit = require('../models/unit').Unit;
var mongoose = require('../lib/mongoose');
var HttpError = require('../error').HttpError;

exports.post = function(req, res, next) {
	var title = req.body.title;
  	var alias = req.body.alias;
  	var unit = new Unit ({title: title, alias: alias});
  	unit.save(function(err) {
  		if (err) { 
  			return next(new HttpError(403, err.message)); 
  			res.send(403);
  		}

  	})
  	console.log(unit);
  	res.send({});
}