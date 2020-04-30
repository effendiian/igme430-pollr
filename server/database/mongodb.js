// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

// Connection library.
const mongoose = require('mongoose');
const models = require('./../models');

// ////////////////////////
// MONGODB OPTIONS
// ////////////////////////

// Debug settings run when not in production.
const debug = (app) => {

    // //////////////
    // Test: User Model Password Generation.

    // Test User data.
    const TestUserData = {
        username: "test",
        rawPassword: "password"
    };


    // Test user.
    const TestUser = new models.User.UserModel({
        username: "test1"
    });

    console.dir(TestUser);


};

// Configure the MongoDB with mongoose.
const configure = (app, { URL, options, onError, onConnect })  => {

    console.log("Connecting to MongoDB using mongoose.");

    // Connect to the MongoDB database.
    mongoose.connect(URL, options, onError);

    // Setup additional listeners.
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection Error:'));
    db.once('open', () => {
        
        // Execute the connection callback.
        onConnect();

        // If in development, add elements to the Database.
        if(process.env.NODE_ENV !== 'production') {
            console.log(`Not running in Development mode. (NODE_ENV=${process.env.NODE_ENV}).`);
            debug(app);
        }

    });

};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
    configure
};