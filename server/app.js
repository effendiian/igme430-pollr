/* APP.JS */

// Entry point for the application.

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
// const session = require('express-session');
// const path = require('path');
const util = require('./util');
const middleware = require('./middleware').configure;
const router = require('./router').configure;

// ////////////////////////
// CONFIGURATION
// ////////////////////////
const app = express(); // Create the server.
const port = process.env.PORT || process.env.NODE_PORT || 3000;
const config = {

  // Handlebar configuration settings.
  handlebars: {
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/../server/views/layouts/`,
    partialsDir: `${__dirname}/../server/views/partials/`,
  },

  // MongoDB configuration settings.
  mongodb: {

    // Database connection URI.
    URL: process.env.MONGODB_URI || 'mongodb://localhost/Pollr',

    // Mongoose options.
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    // Mongoose error handler.
    onError: (err) => {
      if(err) {
        console.error(util.ERRORS.MONGODB.CONNECTION);
        throw err;
      }
    }

  }
};

// ////////////////////////
// MIDDLEWARE
// ////////////////////////
middleware(app);

// ////////////////////////
// DATABASE CONFIGURATION
// ////////////////////////

// Connect to the MongoDB database.
mongoose.connect(
   config.mongodb.URL,
   config.mongodb.options, 
   config.mongodb.onError);

// ////////////////////////
// VIEW ENGINE
// ////////////////////////
// Prepare the view engine.
app.engine('handlebars', handlebars(config.handlebars));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../server/views`);

// ////////////////////////
// ROUTER
// ////////////////////////
router(app);

// ////////////////////////
// APPLICATION START
// ////////////////////////

// Callback.
const onListen = (err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`Listening on port ${port}`);
};

// Start listening.
app.listen(port, onListen);
