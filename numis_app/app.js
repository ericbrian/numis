require('dotenv').config()

const express = require('express');
const session = require('express-session');
const passport = require('passport');

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./auth/google-strategy');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const apiErrorHandler = require('./error/api-error-handler');

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}

const checkLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/dashboard")
    }
    next()
}

const app = express();

app.use(session({
    secret: process.env.SALT,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/login");
})
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(apiErrorHandler);

module.exports = app;
