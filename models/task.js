var async = require('async');
var util = require('util');

var mongoose = require('../lib/mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  right: {
    type: String,
    required: true
  },
  unit: {
    type: String
  },
  tasktype: {
    type: String
  },
  answers: { 
    type: Array, 
    default: [] 
  },
  created: {
    type: Date,
    default: Date.now
  }
});
exports.Task = mongoose.model('Task', schema);