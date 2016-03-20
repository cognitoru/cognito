var checkAuth = require('../middleware/checkAuth');
var getTasks = require('../middleware/getTasks');
var getUnits = require('../middleware/getUnits');
var getProgress = require('../middleware/getProgress');
var getSecond= require('../middleware/getSecond');
var getTaskPage = require('../middleware/getTaskPage');
var checkAdmin = require('../middleware/checkAdmin');

module.exports = function(app) {

  app.get('/', require('./frontpage').get);

  app.get('/login', require('./login').get);
  app.post('/login', require('./login').post);
  app.get('/about', require('./about').get);
  app.post('/logout', require('./logout').post);
  app.post('/addUnit', require('./addUnit').post);
 //app.get('/chat', checkAuth, require('./chat').get);
  app.get('/panel', checkAuth, checkAdmin, getTasks, getUnits, getProgress, require('./panel').get);
  app.post('/panel',  require('./panel').post);
  app.get('/betapanel', checkAuth, checkAdmin, getTasks, getUnits, require('./betapanel').get);
  app.get('/tasks', checkAuth, getTasks, getUnits, require('./tasks').get);
  app.post('/tasks', checkAuth, getTasks, getUnits,  require('./tasks').post);
  //app.get('/tasks/:id', checkAuth, getTaskPage, getSecond, require('./taskpage').get);
  app.post('/checkTask', require('./checkTask').post);
  app.post('/removeTask', require('./removeTask').post);
  app.post('/import', require('./import').post);
  app.get('/test/:unit', checkAuth, getTaskPage, require('./taskpage').get)
  app.get('/myresults', checkAuth, getProgress, require('./myresults').get)
  //app.post('/prepareTask', getSecond, require('./prepareTask').post);
};
