// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const util = require('./../../util');
const mongoose = require('mongoose');

// ////////////////////////
// POLL SCHEMA
// ////////////////////////
const Schema = mongoose.Schema;
const VoteSchema = new Schema({

    // Voter (eg. Id of the User who voted).
    voter: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

    // Poll (eg. Id of the Poll this is referencing).
    poll: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Poll',
    },

    choice: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Poll.options'
    },

    createdDate: {
        type: Date,
        default: Date.now
    },

});

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports.VoteSchema = VoteSchema;