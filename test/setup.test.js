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
before('refresh db connection', async () => { // eslint-disable-line no-undef
  await mongoose.connect(mongodb.URL, mongodb.options);
  const conn = mongoose.connection;
  conn.on('error', (err) => {
    console.warn(`Connection Error: ${err}`);
  });
  conn.once('open', () => {
  });
});

// Disconnect from the mongoose database.
after('disconnect from db', (done) => { // eslint-disable-line no-undef
  mongoose.disconnect((err) => {
    if (err) { throw err; }
    done();
  });
});
