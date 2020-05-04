// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

// Redis.
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

// ////////////////////////
// REDISDB OPTIONS
// ////////////////////////

const configure = (app, {
    host,
    port,
    password,
}) => {

    // Create the redis client.
    const redisClient = redis.createClient({ host, port, password });
    const redisStore = new RedisStore({ client: redisClient });

    console.dir(session);

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