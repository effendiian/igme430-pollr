// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');
const util = require('../../util');

// ////////////////////////
// POLL SCHEMA
// ////////////////////////
const { Schema } = mongoose;
const VoteSchema = new Schema({

  // Voter (eg. Id of the User who voted).
  voter: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  // Poll (eg. Id of the Poll this is referencing).
  poll: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Poll',
  },

  choice: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Choice',
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = VoteSchema;
