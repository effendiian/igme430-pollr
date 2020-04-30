// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');

// ////////////////////////
// CHOICE SCHEMA
// ////////////////////////

// Prepare ChoiceSchema.
const ChoiceSchema = require('./schema.js');

// Prepare and assign static methods.
const statics = require('./statics.js');
statics.assign(ChoiceSchema);

// ////////////////////////
// CHOICE MODEL
// ////////////////////////
ChoiceSchema = mongoose.model('Choice', choiceSchema);

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    ChoiceModel,
    ChoiceSchema
};