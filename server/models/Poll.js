/* POLL Model */

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
const util = require('./../util');
const mongoose = require('mongoose');

// ////////////////////////
// MEMBER INIT
// ////////////////////////
mongoose.Promise = global.Promise;
let PollModel = {};

/* HELPER METHODS */

const convertId = mongoose.Types.ObjectId;
const setTitle = (title) => util.sanitize(title).trim();
const setPrompt = (prompt) => util.sanitize(prompt).trim();

// ////////////////////////
// USER SCHEMA
// ////////////////////////

const Schema = mongoose.Schema;
const PollSchema = new Schema({

  // eg. "Where should I get lunch today?"
  title: {
    type: String,
    required: true,
    trim: true,
    set: setTitle,
  },

  // Poll creator.
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },

  // Voting options.
  options: [{
    body: String
  }],

  votes: [{
    type: mongoose.Schema.ObjectId,
    required: false,
    ref: 'Vote',
  }],
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

/* STATIC METHODS */

// Get the Poll information as an object literal.
PollSchema.statics.toAPI = (doc) => ({
  title: doc.prompt,
  allowAnonymous: doc.allowAnonymous,
  closedDate: doc.closedDate,
  createdDate: doc.createdDate,
  votes: doc.votes,
  owner: doc.owner,
  _id: doc._id,
});

// Find Poll by owner.
PollSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };
  return PollModel.find(search).populate('votes').lean().exec(callback);
};

// Find Poll results.
PollSchema.statics.findVotesById = (pollId, callback) => {
  const search = {
    _id: convertId(pollId),
  };
  return PollModel.find(search).populate('votes').select('votes').lean()
    .exec(callback);
};

// ////////////////////////
// POLL MODEL
// ////////////////////////
PollModel = mongoose.model('Poll', PollSchema);

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports.PollModel = PollModel;
module.exports.PollSchema = PollSchema;
