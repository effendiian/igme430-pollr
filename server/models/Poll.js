/* POLL Model */

//////////////////////////
// MODULE/LIBRARY IMPORT
//////////////////////////
const _ = require('underscore');
const mongoose = require('mongoose');

//////////////////////////
// MEMBER INIT
//////////////////////////
mongoose.Promise = global.Promise;
let PollModel = {};

//////////////////////////
// USER SCHEMA
//////////////////////////

/* DECLARATION */
const PollSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: true,
        trim: true,
        set: setPrompt,   
    },
    allowAnonymous: {
        type: Boolean,
        required: true,
        default: true,
    },
    closedDate: {
        type: Date,
        default: undefined,
    },
    votes: [{ 
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: 'Vote'
    }],
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User',
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

/* HELPER METHODS */

const convertId = mongoose.Types.ObjectId;
const setPrompt = (prompt) => _.escape(prompt).trim();

/* STATIC METHODS */

// Get the Poll information as an object literal.
PollSchema.statics.toAPI = (doc) => ({
    prompt: doc.prompt,
    allowAnonymous: doc.allowAnonymous,
    closedDate: doc.closedDate,
    createdDate: doc.createdDate,
    votes: doc.votes,
    owner: doc.owner,
    _id: doc._id
});

// Find Poll by owner.
PollSchema.statics.findByOwner = (ownerId, callback) => {
    const search = {
        owner: convertId(ownerId)
    };
    return PollModel.find(search).populate('votes').lean().exec(callback);
};

// Find Poll results.
PollSchema.statics.findVotesById = (pollId, callback) => {
    const search = {
        _id: convertId(pollId)
    };
    return PollModel.find(search).populate('votes').select('votes').lean().exec(callback);
};

//////////////////////////
// POLL MODEL
//////////////////////////
PollModel = mongoose.model('Poll', PollSchema);

//////////////////////////
// MODULE EXPORTS
//////////////////////////
module.exports.PollModel = PollModel;
module.exports.PollSchema = PollSchema;