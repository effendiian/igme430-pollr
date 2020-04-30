// ////////////////////////
// POLL SCHEMA
// ////////////////////////

// Prepare PollSchema.
const PollSchema = require('./schema.js');

// Prepare and assign static methods.
const statics = require('./statics.js');
statics.assign(PollSchema);

// Prepare and assign instance methods.
const methods = require('./methods.js');
methods.assign(PollSchema);

// ////////////////////////
// POLL MODEL
// ////////////////////////
PollModel = mongoose.module('Poll', pollSchema);

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    PollModel,
    PollSchema
};