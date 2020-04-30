// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');

// ////////////////////////
// DATABASE OPTIONS
// ////////////////////////

// Pass in the appropriate options for MongoDB.
const configure = ({ URL, options, onError, onConnect }) => {

    // Connect to the MongoDB database.
    // mongoose.connect(URL, options, onError);

};


// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
    configure,
}