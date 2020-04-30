// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');
const util = require('../../util');

// ////////////////////////
// MEMBER INIT
// ////////////////////////

mongoose.Promise = global.Promise;

// ////////////////////////
// CHOICE SCHEMA
// ////////////////////////

const { Schema } = mongoose;
const setBody = (body) => util.sanitize(body).trim();
const ChoiceSchema = new Schema({

  // Choice Option (eg. "Restaurant A").
  body: {
    type: String,
    required: true,
    trim: true,
    set: setBody,
  },

  // Poll Parent (eg. _id of poll).
  poll: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Poll',
  },

  // Created Date
  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = ChoiceSchema;
