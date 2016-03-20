exports.post = function(req, res, next) {
  var sid = req.session.id;
  req.session.destroy(function(err) {

    res.redirect('/');
  });
};