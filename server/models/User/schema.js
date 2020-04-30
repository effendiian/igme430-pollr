// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');

// ////////////////////////
// MEMBER INIT
// ////////////////////////
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// ////////////////////////
// USER SCHEMA
// ////////////////////////
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^[A-Za-z0-9_\-.]{1,16}$/,
  },
  salt: {
    type: Buffer,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports.UserSchema = UserSchema;