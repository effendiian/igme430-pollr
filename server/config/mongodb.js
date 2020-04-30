// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {

    // Database connection URI.
    URL: process.env.MONGODB_URI || 'mongodb://localhost/Pollr',

    // Mongoose options.
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },

    // For handling errors on initial connection.
    onError: (err) => {
        if(err) {
        console.error(util.ERRORS.MONGODB.CONNECTION);
        throw err;
        }
    }

}