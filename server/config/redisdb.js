// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

const url = require('url');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
  console.log(process.env.REDISCLOUD_URL);

  const redisURL = url.parse(process.env.REDISCLOUD_URL);
  const passIndex = 1;
  const redisPass = redisURL.auth.split(':')[passIndex];

  // Export production configuration settings.
  module.exports = {
    url: redisURL.hostname,
    port: redisURL.port,
    password: redisPass,
  };
} else {
  // Read configuration file if this becomes an issue.
  dotenv.config({ path: 'server/.env' });

  // Export secrets from dotenv.
  module.exports = {
    host: process.env.REDISCLOUD_URL,
    port: process.env.REDISCLOUD_PORT,
    password: process.env.REDISCLOUD_PASSWORD,
  };
}
