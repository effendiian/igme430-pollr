/* APP.JS */

// Entry point for the application.

//////////////////////////
// MODULE/LIBRARY IMPORT
//////////////////////////
const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const path = require('path');

const middleware = require('./middleware').configure;
const router = require('./router').configure;


//////////////////////////
// CONFIGURATION
//////////////////////////
const port = process.env.PORT || process.env.NODE_PORT || 3000;

//////////////////////////
// MIDDLEWARE
//////////////////////////
const app = express();
middleware(app);

//////////////////////////
// ROUTER
//////////////////////////
router(app);

//////////////////////////
// APPLICATION START
//////////////////////////

// Callback.
const onListen = (err) => {
    if(err){
        console.error(err);
        throw err;
    }
    console.log(`Listening on port ${port}`);
};

// Start listening.
app.listen(port, onListen);