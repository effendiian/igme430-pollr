// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');

// ////////////////////////
// VOTE SCHEMA
// ////////////////////////

// Prepare the VoteSchema.
const VoteSchema = require('./schema.js');

// Prepare and assign static methods.
const statics = require('./statics.js');

statics.assign(VoteSchema);

// Prepare and assign instance methods.
const methods = require('./methods.js');

methods.assign(VoteSchema);

// ////////////////////////
// POLL MODEL
// ////////////////////////
VoteModel = mongoose.model('Vote', VoteSchema);

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
  VoteModel,
  VoteSchema,
};
