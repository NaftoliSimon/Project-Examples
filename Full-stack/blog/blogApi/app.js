const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const app = express();

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const routes = require('./routes');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index', {partials: {content: 'error'}});
});

module.exports = app;
