const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');

const index   = require('./routes/index');
const toppage = require('./routes/top');
const mypage  = require('./routes/mypage');
//const regist = require('./routes/regist');
const login   = require('./routes/login');
const uplode  = require("./routes/uplode");
const counter = require("./routes/counter");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({
  secret: "my-session",
  rolling: true,
  name: "clip-cookie",
  saveUninitialized: true,
  resave: false,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
  }
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/'      , index);
app.use('/top'   , toppage);
app.use('/mypage', mypage);
//app.use('/regist', regist);
app.use('/login' , login);
app.use('/uplode', uplode);
app.use('/counter', counter);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(404);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if(err){
  	// render the error page
  	res.status(err.status || 500);
  	res.render('error');
  }
});

module.exports = app;
