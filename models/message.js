var async = require('async');
var util = require('util');

var mongoose = require('../lib/mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  from: {
    type: String
  },
  content {
    type: String
  }
});