// ////////////////////////
// INSTANCE FUNCTIONS
// ////////////////////////

// Query options subdocument assigned to this Poll.
const findOptions = function (callback) {
  return this.populate('options').select('options').lean().exec((err, options) => {
    if (err) {
      // Error in query. No options returned.
      return callback(err, null);
    }

    if (!options) {
      // Options may be empty.
      return callback(null, null);
    }

    // If populate is successful, returns the options.
    return callback(null, options);
  });
};

// Query votes subdocument assigned to this Poll.
const findVotes = function (callback) {
  return this.populate('votes').select('votes').lean().exec((err, votes) => {
    if (err) {
      // Error in query. No votes returned.
      return callback(err, null);
    }

    if (!votes) {
      // Votes may be empty.
      return callback(null, null);
    }

    // If populate is successful, returns the votes.
    return votes(null, votes);
  });
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Assign methods to schema.
module.exports.assign = (schema) => {
  // Object containing static functions to assign to the schema.
  const fns = {
    findOptions,
    findVotes,
  };

  // Assign all fns (functions) listed above to the schema.
  Object.keys(fns).forEach((fnKey) => {
    schema.methods[fnKey] = fns[fnKey];
  });
};
