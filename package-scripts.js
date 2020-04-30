
// ////////////////////////
// NPM PACKAGE SCRIPTS
// ////////////////////////

const npsUtils = require('nps-utils');

module.exports = {
  scripts: {
    
    // ///////////
    // Entry point.

    default: { 
      script: "node ./server/app.js",
      description: "Entry point for the application.",
    },

    lint: {
      default: {
        script: "eslint ./server",
        description: "Lint the server files."
      },
      fix: {
        script: "eslint ./server --fix",
        description: "Lint the server files and fix them."
      },
      watch: {
        script: "esw "
      }
    },

    test: {
      default: {
        script: "nps lint.fix && mocha",
        description: "Use mocha to test the application."
      },
      watch: {
        script: "nps lint.fix && mocha --watch ./tests ./",
        description: "Watch application directory using the watch command."
      }
    },

    serve: {
      script: "nodemon --watch ./server --exec 'node ./server/app.js'",
      description: "Use nodemon to start a dev server that restarts when files need to be changed."
    }

  }
};
