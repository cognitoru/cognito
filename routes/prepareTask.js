var Task = require('../models/task').Task;
var mongoose = require('../lib/mongoose');
var async = require('async');
var HttpError = require('../error').HttpError;

exports.post = function(req, res, next) {
  var unit = req.body.unit;
  //console.log(unit);
  /*if (!req.body.counter) {
  	counter = 0;
  } else {
  	console.log('From req: ' + req.body.counter)
  	counter = parseInt(req.body.counter);
	}
	  console.log('Counter: ' + counter)
	  */
	  console.log(req.counter)
  req.uri = res.locals.uri = null;
  Task.find({unit: unit}, function(err, tasks) {
    if (err) throw err;
    var uriId = tasks[req.counter]._id;
    console.log("Counter in router " + req.counter);
    console.log(uriId);
    var uri = "/tasks/" + uriId;
    req.uri = res.locals.uri = uri;
    //req.counter = res.locals.counter = counter;
    res.send({uri: uri});
  });

}