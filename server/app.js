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
const app = express(); // Create the server.
const port = process.env.PORT || process.env.NODE_PORT || 3000;
const config = {
    handlebars: {
        extname: 'handlebars',
        defaultLayout: 'main',
        layoutsDir: `${__dirname}/../server/views/layouts/`,
        partialsDir: `${__dirname}/../server/views/partials/`,
    }
};

//////////////////////////
// VIEW ENGINE
//////////////////////////
// Prepare the view engine.
app.engine('handlebars', handlebars(config.handlebars));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../server/views`);
    
//////////////////////////
// MIDDLEWARE
//////////////////////////
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