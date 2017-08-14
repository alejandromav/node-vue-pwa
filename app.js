/*global require, __dirname, module */

const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');

const index = require('./routes/index');
const api = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.all('*', (req, res, next) => {
	console.log('req start: ', req.secure, req.hostname, req.url, app.get('port'));
	const isLocalhost = req.hostname === 'localhost' || req.hostname === '127.0.0.1';

	if (req.secure || isLocalhost) {
		return next();
	}

	res.redirect('https://'+req.hostname + req.url);
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public/dist')));
app.use('/api', api);

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error(res.originalUrl + ' Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
