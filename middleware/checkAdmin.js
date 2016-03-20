var HttpError = require('../error').HttpError;
var User = require('../models/user').User;

module.exports = function(req, res, next) {
	User.findById(req.session.user, function(err, user) {
    	if (err) return next(err);

    	if (user.username != "admin") {
    		return next(new HttpError(401, "Вы не администратор"));
    	}
    	next();
  	});
};