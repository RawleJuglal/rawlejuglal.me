//These are middleware that we are requiring to run this code
// Middleware is code that executes between the server receiving the request 
//and your own appliction's callback code

var express = require('express');
//This middleware contains utilities for handling and transforming file paths.
var path = require('path');
//A favicon /ˈfæv.ɪˌkɒn/ (short for favorite icon), also known as a shortcut icon, 
//website icon, tab icon, URL icon or bookmark icon, is a file named favicon.ico and 
//containing one or more small icons,[1] most commonly 16×16 pixels, associated with a 
//particular website or web page.
var favicon = require('serve-favicon');
//This middleware contains utilities for logging information to the console
var logger = require('morgan');
//This middleware is used for cookie
var cookieParser = require('cookie-parser');
//This middleware is used for parsing body content into more usable data
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

if (!process.env.MONGODB_URI) {
  var mongoUri = 'mongodb://heroku_5vv43jbv:d66sqhhbobuepr4fmdtgavqe6l@ds153609.mlab.com:53609/heroku_5vv43jbv'
} else {
  var mongoUri = process.env.MONGODB_URI
}

mongoose.connect(mongoUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', dbCallback);

function dbCallback() {
  console.log('connection success');
}
//This middleware is used to respond to request made by client
var routes = require('./routes/index');
var users = require('./routes/users');
var heartbeats = require('./routes/heartbeat');
var posts = require('./routes/blog');
var projects = require('./routes/codecademy');
var portfolios = require('./routes/portfolio');
var freeCodeProjects = require('./routes/freeCodeCamp');
//-----------------------------------------------------------------------
//instanciating app as an express object
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//The static middleware is used to send files in the specified directory automatically. 
//It looks in the directory specified and if it finds a file 
//that matches a GET request's path it automatically sends that file.
app.use(express.static(path.join(__dirname, 'public')));

//when client submits base url respond with routes which requires ./routes/index seen above or go to file for more details
app.use('/', routes);
//when client submits base url/users respond with users which requires ./routes/users seen above or go to file for more details
app.use('/users', users);
//when client submits base url/blog/posts respond with blog which requires ./routes/blog seen above or go to file for more details
app.use('/blog/posts', posts);
//when client submits base url/blog/heartbeat respond with blog which requires ./routes/heartbeat seen above or go to file for more details
app.use('/heartbeat', heartbeats);
//when client submits base url/codecademy responds with projects which requires ./routes/codecademy seen above or go to file for more details
app.use('/codecademy', projects);
//when client submits base url/Portfolio responds with projects which requires ./routes/Portfolio seen above or go to file for more details
app.use('/portfolio', portfolios);
//when client submits base url/freeCodeCamp responds with projects which requires ./routes/Portfolio seen above or go to file for more details
app.use('/freeCodeCamp', freeCodeProjects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
