var async = require('async');
var util = require('util');

var mongoose = require('../lib/mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  alias: {
    type: String,
    unique: true,
    required: true
  }
});
exports.Unit = mongoose.model('Unit', schema);