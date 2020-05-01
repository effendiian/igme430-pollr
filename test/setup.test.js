// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const mongoose = require('mongoose');

// ////////////////////////
// MEMBER INIT
// ////////////////////////

mongoose.Promise = global.Promise;
const mongodb = {
  URL: 'mongodb://localhost/pollr',
  options: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

// ////////////////////////
// MOCHA HOOKS
// ////////////////////////

// Connect to the MongoDB and then drop the collection.
before("refresh db connection", async () => {

  try {
    await mongoose.connect(mongodb.URL, mongodb.options);
    const conn = mongoose.connection;
    conn.on('error', (err) => {
      console.warn(`Connection Error: ${err}`);
    });
    conn.once('open', () => {
    });
  }
  catch(e) {
    throw e;
  }

});

// Disconnect from the mongoose database.
after("disconnect from db", (done) => {
  mongoose.disconnect((err) => {
    if(err) { throw err; }
    done();
  });
});
