var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var User = require('./routes/user/UserRouter');
var Brand = require('./routes/brand/BrandRouter');
var Style = require('./routes/style/StyleRouter');
var index = require('./routes/index');
var color = require('./routes/color');
var material = require('./routes/material');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    name: 'SunRiver',
    secret: 'd0a9a2fx7u9h3rfx1267f',
    // 设置成 null，就会成为浏览器 session，浏览器不关闭，session 一直保留；浏览器关闭，session 消失
    cookie: {maxAge: null},
    resave: false,
    saveUninitialized: true
}));

app.use('/', index);
app.use('/user', User);
app.use('/brand', Brand);
app.use('/style', Style);
app.use('/color', color);
app.use('/material', material);

// 如果以上路由都没有进入，就进入错误路由捕获
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
