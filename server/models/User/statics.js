// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const crypto = require('crypto');
const convertId = require('mongoose').Types.ObjectId;

// ////////////////////////
// MEMBER INIT
// ////////////////////////

const iterations = 10000;
const saltLength = 64;
const keyLength = 64;

// ////////////////////////
// HELPER FUNCTIONS
// ////////////////////////

// Hash input value. (Callback is returned).
const calculateHash = (password, salt, callback) => {
    return crypto.pbkdf2(password, salt, iterations, keyLength, 'RSA-SHA512', (err, hash) => (
        callback(err, salt, hash.toString('hex'))
    ));
};

// Validate password against input attempt.
const validate = (user, actual, callback) => {
    const expectedHash = user.password; // Stored hash of the password.
    return calculateHash(actual, user.salt, (err, salt, actualHash) => (
        callback((actualHash === expectedHash))
    ));
}

// ////////////////////////
// STATIC FUNCTIONS
// ////////////////////////

// Map data for client API.
const toAPI = (doc) => ({
    _id: doc._id,
    username: doc.username,
    createdDate: doc.createdDate
});

// Find user by id.
const findById = function(id, callback) {
    return this.findOne({
        _id: convertId(id)
    }, callback);
};

// Find user by username.
const findByUsername = function(name, callback) {
    return this.findOne({
        username: name,
    }, callback);
};

// Generate salt and store hash for the password.
// Callback receives (err, salt, hash).
const generateSalt = (password, callback) => {
    const salt = crypto.randomBytes(saltLength);
    calculateHash(password, salt, callback);
};

// Authenticate the user login.
const authenticate = function (actualUsername, actualPassword, callback) {
    this.findByUsername(actualUsername, (err, user) => {
        if(err) {
            // Error in query. Malformed request.
            return callback(err);
        }

        if(!user) {
            // No error, but no user found by this username.
            return callback(null, null);
        }

        // Validate the user password.
        return validate(user, actualPassword, (isValidPassword) => {
            if(isValid === true){
                // Return the user.
                return callback(null, user);
            } else {
                // Return nothing, since invalid.
                return callback(null, null);
            }
        });
    });
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Assign statics to schema.
module.exports.assign = function (schema) {

    // Object containing static functions to assign to the schema.
    const fns = {
        toAPI,
        findById,
        findByUsername,
        generateSalt,
        authenticate,
    };

    // Assign all fns (functions) listed above to the schema.
    Object.keys(fns).forEach((fnKey) => {
        schema.statics[fnKey] = fns[fnKey];
    });

}