const express = require('express');
const path = require('path');
const app = express();
const { port, appName } = require('./config');
const requestLogger = require('./middleware/requestLogger');
const responseLogger = require('./middleware/responseLogger');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { serverError, notFound } = require('./middleware/errorHandler');
const healthRouter = require('./routes/health');

// caddy
app.set('trust proxy', 1);

// gds
app.use('/govuk-assets', express.static( path.join( __dirname, '../node_modules/govuk-frontend/dist/govuk')));
app.use('/assets', express.static(path.join(__dirname, '../node_modules/govuk-frontend/dist/govuk/assets')));

// health
app.use('/', healthRouter);

// helmet
app.use(helmet());

// compression 
app.use(compression());

// rate limit
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// middleware
app.use(requestLogger);
app.use(express.urlencoded( { extend:true } ));              // global middle wear runs for every request
app.use(express.static(path.join(__dirname, '../public')));  // route specific, error handleling middlewear
app.use(responseLogger);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
require('./config/nunjucks')(app)

// routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const imagesRouter = require('./routes/images');
app.use('/', imagesRouter);


// central error handler
app.use(serverError);
app.use(notFound);


module.exports = app;











