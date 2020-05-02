/* CONTROLLERS */


// User.js
// Poll.js
// Choice.js
// Vote.js
// Generic.js


// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

const generics = require('./generic.js');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Return factory function.
module.exports = {
    getPageAction: generics.getPageAction
}