/* MIDDLEWARE */

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
const express = require('express');
const path = require('path');
// const csrf = require('csurf');
const favicon = require('serve-favicon');

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
const configure = (app) => {

  // Serve static assets from the '/assets'
  app.use('/assets', express.static(path.resolve(`${__dirname}/../../hosted/`)));
  app.use(favicon(`${__dirname}/../../hosted/img/favicon.png`));
  app.disable('x-powered-by');
  
};

// ////////////////////////
// EXPORT
// ////////////////////////
module.exports = {
  middleware,
  configure,
};
