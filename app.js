var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./routes/index');
var toppage = require('./routes/top');
var mypage = require('./routes/mypage');
//const regist = require('./routes/regist');
var login = require('./routes/login');
var uplode = require("./routes/uplode");
var counter = require("./routes/counter");
var app = express();
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
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    }
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/top', toppage);
app.use('/mypage', mypage);
//app.use('/regist', regist);
app.use('/login', login);
app.use('/uplode', uplode);
app.use('/counter', counter);
// app.use('/users', users);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(404);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    if (err) {
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }
});
module.exports = app;
