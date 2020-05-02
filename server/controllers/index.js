/* CONTROLLERS */

// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

const generics = require('./generic.js');
const User = require('./User.js');
// const Poll = require('./Poll.js');
// const Choice = require('./Poll.js');
// const Vote = require('./Poll.js');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Return factory function.
module.exports = {
    User,
    getPageAction: generics.getPageAction,
    getFormPageAction: generics.getFormPageAction,
    getPageToken: generics.getPageToken
}