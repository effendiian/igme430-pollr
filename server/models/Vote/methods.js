// ////////////////////////
// INSTANCE FUNCTIONS
// ////////////////////////

// Find all votes for the same choice.
const findSimilarVotes = function(callback) {
    return this.findByChoice(this.choice, (err, votes) => {
        if(err) {
            // Error in query. No similar votes found.
            return callback(err, null);
        }

        if(!votes) {
            // Collection may be empty.
            return callback(null, null);
        }

        // If populate and search is successful, returns the similar votes.
        return callback(null, votes);
    });
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Assign methods to schema.
module.exports.assign = (schema) => {

    // Object containing static functions to assign to the schema.
    const fns = {
        
    };

    // Assign all fns (functions) listed above to the schema.
    Object.keys(fns).forEach((fnKey) => {
        schema.methods[fnKey] = fns[fnKey];
    });

}