var Progress = require('../models/progress').Progress;
var mongoose = require('../lib/mongoose');
var async = require('async');
var HttpError = require('../error').HttpError;
var fs = require('fs');
var header="Имя"+"\t"+" Тема"+"\t"+"Результаты"+"\t"+"Оценка"+"\t"+"Дата"+"\n";

exports.post = function(req, res, next) {
  	Progress.find({}, function(err, progress) {
    	if (err) throw err;
    	fs.writeFile('file.xls', header,'utf8', function (err) {});
    	res.send({});
  	})
}