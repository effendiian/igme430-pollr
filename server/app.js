/* APP.JS */

// Entry point for the application.

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const express = require('express');
const config = require('./config');
const middleware = require('./middleware');
const router = require('./router');

// ////////////////////////
// APPLICATION INITIALIZATION
// ////////////////////////

const app = express(); // Create the server.

// If in development, add 'env.debug = true' to the app.
if (process.env.NODE_ENV !== 'production') {
  console.log(`Not running in Production mode. (NODE_ENV=${process.env.NODE_ENV}).`);
  app.debug = true;
}

// ////////////////////////
// MIDDLEWARE CONFIGURATION
// ////////////////////////

middleware.configure(app, config);

// ////////////////////////
// ROUTER
// ////////////////////////

router.configure(app, config);

// ////////////////////////
// APPLICATION START
// ////////////////////////

// Callback.
const onListen = (err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`Listening on port ${config.port}`);
};

// Start listening.
app.listen(config.port, onListen);
