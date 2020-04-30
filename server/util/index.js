// Wrapper for utility functions that can be used by other modules.

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    ERRORS: require('./error.js').ERRORS,
    sanitize: require('./sanitize.js').sanitize,
};