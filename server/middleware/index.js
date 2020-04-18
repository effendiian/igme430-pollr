/* MIDDLEWARE */

//////////////////////////
// MODULE/LIBRARY IMPORT
//////////////////////////
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const csrf = require('csurf');
const favicon = require('serve-favicon');

//////////////////////////
// MIDDLEWARE OPTIONS
//////////////////////////
const middleware = {

};

//////////////////////////
// APP CONFIGURATION
//////////////////////////
const configure = (app) => {

    // Serve static assets from the '/assets'
    app.use('/assets', express.static(path.resolve(`${__dirname}/../../hosted/`)));
    app.use(favicon(`${__dirname}/../../hosted/img/favicon.png`));
    app.disable('x-powered-by');

    // Configure the handlebars engine.
    app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.set('views', `${__dirname}/../views`);

};

//////////////////////////
// EXPORT
//////////////////////////
module.exports = {
    middleware,
    configure
}