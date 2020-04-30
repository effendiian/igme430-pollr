/* MIDDLEWARE */

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
// const csrf = require('csurf');
const favicon = require('serve-favicon');
const compression = require('compression');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require('express-session');

// ////////////////////////
// MIDDLEWARE OPTIONS
// ////////////////////////
const middleware = {
  auth: require('./auth.js'),
  secure: require('./secure.js')
};

// ////////////////////////
// APP CONFIGURATION
// ////////////////////////
const configure = (app, config) => {

  // Serve static assets from the '/assets'
  app.use('/assets', express.static(path.resolve(`${__dirname}/../../hosted/`)));

  // SERVE FAVICON
  app.use(favicon(`${__dirname}/../../hosted/img/favicon.png`));

  // DISABLE HEADER FOR SECURITY
  app.disable('x-powered-by');

  // PARSERS & CONTENT TREATMENT
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(cookieParser());
  
  // VIEW ENGINE  
  app.engine('handlebars', handlebars(config.handlebars));
  app.set('view engine', 'handlebars');
  app.set('views', `${__dirname}/../server/views`);

};

// ////////////////////////
// EXPORT
// ////////////////////////
module.exports = {
  middleware,
  configure,
};
