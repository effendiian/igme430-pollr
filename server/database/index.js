// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongodb = require('./mongodb.js');
// const redisdb= require('./redisdb.js');

// ////////////////////////
// DATABASE OPTIONS
// ////////////////////////

// Pass in the appropriate options for MongoDB.
const configure = (app, config) => {

    // Configure main database.
    mongodb.configure(app, config.mongodb);

    // Configure store.
    // redisdb.configure(app, config.redisdb);

};


// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
    configure,
}