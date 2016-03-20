var Progress = require('../models/progress').Progress;
var HttpError = require('../error').HttpError;

exports.get = function(req, res) {
  res.render('panel');
}
exports.post = function(req, res) {
	var username = req.body.username;
	var unit = req.body.unit;
	var mark = req.body.mark;
	var rights = req.body.rights;
	var countTasks = req.body.countTasks;
	var type = req.body.type;
	var progress = new Progress ({username: username, unit: unit, rights: rights, countTasks: countTasks, mark: mark});
  	if (type == 'purge') {
  		Progress.remove({}, function(err, progress) {
	    	if (err) throw err;
	    	//console.log(tasks)
	    	res.send({});
  		})
  	} else {
	  	progress.save(function(err) {
	  		if (err) { 
	  			return next(new HttpError(403, err.message)); 
	  			res.send(403);
	  		}

	  	})
	  	console.log(progress);
  	}	
  	res.send({});
}
