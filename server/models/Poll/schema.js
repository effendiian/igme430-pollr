// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
const util = require('./../../util');
const mongoose = require('mongoose');

// ////////////////////////
// MEMBER INIT
// ////////////////////////
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// ////////////////////////
// POLL SCHEMA
// ////////////////////////

const Schema = mongoose.Schema;
const setTitle = (title) => util.sanitize(title).trim();
const setPrompt = (prompt) => util.sanitize(prompt).trim();
const PollSchema = new Schema({

    // Poll Prompt (eg. "Where should I get lunch today?").
    title: {
        type: String,
        required: true,
        trim: true,
        set: setTitle,
    },

    // Poll Creator (eg. _id of author).
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User',
    },

    // Poll Options (eg. [ { _id: "...", body: "Restaurant A" }, ... ])
    // Search using poll.options.id()
    options: [{
        body: { 
            type: String,
            trim: true,
            set: setPrompt,
        }
    }],

    // Vote Results
    votes: [{
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: 'Vote'
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
module.exports.PollSchema = PollSchema;