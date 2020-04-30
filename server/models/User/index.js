// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');

// ////////////////////////
// USER SCHEMA
// ////////////////////////

// Prepare UserSchema.
const UserSchema = require('./schema.js');

// Prepare and assign static methods.
const statics = require('./statics.js');

statics.assign(UserSchema);

// ////////////////////////
// USER MODEL
// ////////////////////////
UserModel = mongoose.model('User', UserSchema);

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
  UserModel,
  UserSchema,
};
