var mongoose = require('./lib/mongoose');
var async = require('async');

async.series([
  open,
  dropDatabase,
  requireModels,
  createTasks
], function(err) {
  console.log(arguments);
  mongoose.disconnect();
  process.exit(err ? 255 : 0);
});

function open(callback) {
  mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
  var db = mongoose.connection.db;
  db.dropDatabase(callback);
}

function requireModels(callback) {
  require('./models/task');

  async.each(Object.keys(mongoose.models), function(modelName, callback) {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

function createTasks(callback) {

  var users = [
    {title: "Задание №1", content: "Выполните:", right: "1"},
    {title: "Задание №2", content: "Выполните:", right: "2"},
    {title: "Задание №3", content: "Выполните:", right: "3"}
  ];

  async.each(users, function(userData, callback) {
    var task = new mongoose.models.Task(userData);
    task.save(callback);
    console.log(task)
  }, callback);
}
