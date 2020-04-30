// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

// Get the PORT number.
const port = require('./port.js');  

// Get the middleware settings.
const middleware = require('./middleware.js');

// Settings for Handlebars.
const handlebars = require('./handlebars.js');

// MongoDB configuration settings.
const mongodb = require('./mongodb.js');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    port,
    middleware,
    handlebars,
    mongodb
};