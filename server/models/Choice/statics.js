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
    body: doc.body,
    poll: doc.poll,
});

// Find choice by Choice Id.
const findById = function(choiceId, callback) {
    return this.findOne({
        _id: convertId(choiceId),
    }, callback);
};

// Find choice by Choice body.
const findByBody = function(queryString, callback) {
    return this.findOne({
        body: queryString,
    }, callback);
}

// Find all choices associated with a specific Poll.
const findByPoll = function(pollId, callback) {
    return this.find({
        poll: convertId(pollId)
    }).populate('poll', '_id title').select('_id body poll').exec(callback);
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
        findByBody,
        findByPoll,
    };

    // Assign all fns (functions) listed above to the schema.
    Objects.keys(fns).forEach((fnKey) => {
        schema.statics[fnKey] = fns[fnKey];
    });

}