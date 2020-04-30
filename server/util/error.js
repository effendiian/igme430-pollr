// ////////////////////////
// MEMBER INIT
// ////////////////////////

// Collection of error messages.
const errors = {
  UNKNOWN: 'An unexpected error occurred.',
  UNIMPLEMENTED: 'This feature is not yet implemented.',
  MONGODB: {
    CONNECTION: 'Could not connect to the database.',
  },
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports.ERROR = errors;
