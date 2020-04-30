// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

// Get the PORT number.
const port = require('./port.js');  

// Settings for Handlebars.
const handlebars = require('./handlebars.js');

// MongoDB configuration settings.
const mongodb = require('./mongodb.js');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    port,
    handlebars,
    mongodb
};