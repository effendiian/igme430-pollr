// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const convertId = require('mongoose').Types.ObjectId; // For document _id conversion.

// ////////////////////////
// STATIC FUNCTIONS
// ////////////////////////

// Map data for client API.
const toAPI = (doc) => ({
    _id: doc._id,
    title: doc.title,
    owner: doc.owner,
    prompts: doc.prompts,
    createdDate: doc.createdDate,
});

// Find poll by Poll id.
const findById = function(id, callback) {
    return this.findOne({
        _id: convertId(id)
    }, callback);
};

// Find all polls belonging to a specific user.
const findByOwner = function(ownerId, callback) {
    return this.find({
        ownerId: convertId(ownerId)
    }).select('_id title owner options createdDate').exec(callback);
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
        findByOwner,
    };

    // Assign all fns (functions) listed above to the schema.
    Object.keys(fns).forEach((fnKey) => {
        schema.statics[fnKey] = fns[fnKey];
    });

}