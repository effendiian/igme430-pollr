// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const util = require('./../../util');
const mongoose = require('mongoose');

// ////////////////////////
// MEMBER INIT
// ////////////////////////

mongoose.Promise = global.Promise;

// ////////////////////////
// CHOICE SCHEMA
// ////////////////////////

const Schema = mongoose.Schema;
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