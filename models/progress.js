var async = require('async');
var util = require('util');

var mongoose = require('../lib/mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  username: {
    type: String
  },
  rights: {
    type: Number
  },
  countTasks: {
    type: Number
  },
  mark: {
    type: Number
  },
  unit: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
exports.Progress = mongoose.model('Progress', schema);