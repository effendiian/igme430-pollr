// ////////////////////////
// IMPORT MODELS
// ////////////////////////

const User = require('./User');
const Poll = require('./Poll');
const Vote = require('./Vote');
const Choice = require('./Choice');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Exports all schema/models for the application.
module.exports = {

  User,
  Poll,
  Vote,
  Choice,

};
