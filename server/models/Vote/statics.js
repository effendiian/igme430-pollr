// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const convertId = require('mongoose').Types.ObjectId; // For document _id conversion.

// ////////////////////////
// STATIC FUNCTIONS
// ////////////////////////

// Map data for client API
const toAPI = (doc) => ({
    _id: doc._id,
    voter: doc.voter,
    poll: doc.poll,
    choice: doc.choice,
});

// Find vote by Vote id.
const findById = function(voteId, callback) {
    return this.findOne({
        _id: convertId(voteId),
    }, callback);
};

// Find all votes associated with a specific User.
const findByVoter = function(voterId, callback) {
    return this.find({
        voter: convertId(voterId)
    }).populate('voter', 'username').select('_id voter poll choice').exec(callback);
};

// Find all votes associated with a specific Poll.
const findByPoll = function(pollId, callback) {
    return this.find({
        poll: convertId(pollId)
    }).populate('poll', '_id title').select('_id voter poll choice').exec(callback);
};

// Find by choice.
const findByChoice = function(choiceId, callback) {
    return this.find({
        choice: convertId(choiceId)
    }).populate('choice', '_id body').select('_id voter poll choice').exec(callback);
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Assign statics to schema.
module.exports.assign = (schema) => {

    // Object containing static functions to assign to the schema.
    const fns = {
        toAPI,
        findById,
        findByVoter,
        findByPoll,
        findByChoice,
    };

    // Assign all fns (functions) listed above to the schema.
    Object.keys(fns).forEach((fnKey) => {
        schema.statics[fnKey] = fns[fnKey];
    });

}