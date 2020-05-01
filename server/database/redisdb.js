// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

// Redis.
const redis = require('redis');
const redisConnect = require('connect-redis');

// ////////////////////////
// REDISDB OPTIONS
// ////////////////////////

const configure = (app, {
    host,
    port,
    password,
    session,
}) => {

    // Create the redis client.
    const redisClient = redis.createClient({ host, port, password });
    const redisStore = new (redisConnect(session))({ client: redisClient });

    // Setup the store.
    app.use(session({
        key: 'sessionid',
        store: redisStore,
        secret: 'Pollr Vortex',
        resave: true,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
        },
    }));

};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
  configure,
};