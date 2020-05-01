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
// POLL SCHEMA
// ////////////////////////

const { Schema } = mongoose;
const setTitle = (title) => util.sanitize(title).trim();
const setDescription = (desc) => util.sanitize(desc).trim();
const PollSchema = new Schema({

  // Poll Prompt (eg. "Where should I get lunch today?").
  title: {
    type: String,
    required: true,
    trim: true,
    set: setTitle,
  },

  // Poll Description (eg. "I'm giving you additional information...").
  description: {
    type: String,
    required: false,
    trim: true,
    set: setDescription,
  },

  // Poll Creator (eg. _id of author).
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  // Poll Options (eg. [ { _id: "...", body: "Restaurant A" }, ... ])
  // Search using poll.options.id()
  options: [{
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Choice',
  }],

  // Vote Results
  votes: [{
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Vote',
  }],

  // Created Date
  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = PollSchema;
