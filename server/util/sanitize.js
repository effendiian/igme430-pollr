// Various functions used to sanitize user input.
// 

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

// Underscore library.
const _ = require('underscore');

// Sanitize input by escaping &, <, >, ", `, and ' characters.
const sanitize = (input) => (
    _.escape(input)
);

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    sanitize
};