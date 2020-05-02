/* MIDDLEWARE */

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
const express = require('express');
const handlebars = require('express-handlebars');
const csrf = require('csurf');
const favicon = require('serve-favicon');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const database = require('./../database');

// ////////////////////////
// MIDDLEWARE OPTIONS
// ////////////////////////

const auth = require('./auth.js');
const secure = require('./secure.js');

// ////////////////////////
// APP CONFIGURATION
// ////////////////////////
const configure = (app, config) => {

  // Serve static assets from the '/assets'
  app.use('/assets', express.static(config.middleware.path.assets));

  // SERVE FAVICON
  app.use(favicon(config.middleware.path.favicon));

  // DISABLE HEADER FOR SECURITY
  app.disable('x-powered-by');

  // PARSERS & CONTENT TREATMENT
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  
  // DATABASE & SESSION MANAGEMENT
  config.redisdb.session = session;
  database.configure(app, config);

  // VIEW ENGINE
  const hbsInstance = handlebars.create(config.handlebars);
  app.engine('handlebars', hbsInstance.engine);
  app.set('view engine', 'handlebars');
  app.set('views', config.middleware.path.views);

  // CSRF TOKEN
  app.use(csrf());
  if(!app.debug){
    app.use(auth.requiresCSRFToken);
  }

};

// ////////////////////////
// EXPORT
// ////////////////////////
module.exports = {
  middleware: {
    auth,
    secure
  },
  configure,
};
