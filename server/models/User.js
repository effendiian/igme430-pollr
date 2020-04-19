/* USER Model */

//////////////////////////
// MODULE/LIBRARY IMPORT
//////////////////////////
const crypto = require('crypto');
const mongoose = require('mongoose');

//////////////////////////
// MEMBER INIT
//////////////////////////
mongoose.Promise = global.Promise;
let UserModel = {};
const iterations = 10000;
const saltLength = 64;
const keyLength = 64;

//////////////////////////
// USER SCHEMA
//////////////////////////

/* DECLARATION */
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^[A-Za-z0-9_\-.]{1,16}$/,
    },
    salt: {
        type: Buffer,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

/* HELPER METHODS */

// Validate password. Pass in the testing phrase
// and a callback that accepts an isValid boolean.
const validatePassword = (doc, queryPassword, callback) => {
    const storedPassword = doc.password;

    return crypto.pbkdf2(queryPassword, doc.salt, iterations, keyLength, 'RSA-SHA512', (err, hash) => {
        if(hash.toString('hex') !== storedPassword) {
            return callback(false);
        }
        return callback(true);
    });
};

/* STATIC METHODS */

// Get the User information as an object literal.
UserSchema.statics.toAPI = (doc) => ({
    username: doc.username,
    createdDate: doc.createdDate,
    _id: doc._id
});

// Find User by the username.
UserSchema.statics.findByUsername = (name, callback) => {
    const search = {
        username: name,
    };

    return UserModel.findOne(search, callback);
};

// Generate hash for the password.
UserSchema.statics.generateHash = (password, callback) => {
    const salt = crypto.randomBytes(saltLength);

    crypto.pbkdf2(password, salt, iterations, keyLength, 'RSA-SHA512', (err, hash) => (
        callback(salt, hash.toString('hex'))
    ));
};

// Authenticate the User login.
UserSchema.statics.authenticate = (username, password, callback) => {
    UserModel.findByUsername(username, (err, doc) => {
        if(err){
            return callback(err);
        }

        if(!doc){
            return callback();
        }

        return validatePassword(doc, password, (isValid) => {
            if(isValid === true){
                return callback(null, doc);
            }

            return callback();
        });
    });
};

//////////////////////////
// USER MODEL
//////////////////////////
UserModel = mongoose.model('User', UserSchema);

//////////////////////////
// MODULE EXPORTS
//////////////////////////
module.exports.UserModel = UserModel;
module.exports.UserSchema = UserSchema;
