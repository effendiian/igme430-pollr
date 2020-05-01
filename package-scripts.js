
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
      client: {
        default: {
          script: "eslint ./client",
          description: "Lint client-side folder and subdirectories.",
        },
        fix: {
          script: "eslint ./client --fix",
          description: "Lint and fix client-side folder and subdirectories."
        },
        watch: {
          script: "esw ./client -w --color --fix",
          description: "Watch client files for changes and lint automatically."
        }
      },
      server: {
        default: {
          script: "nps lint",
          description: "Lint the server files."
        },
        fix: {
          script: "eslint ./server --fix",
          description: "Lint the server files and fix them."
        },
        watch: {
          script: "esw ./server -w --color --fix",
          description: "Watch client files for changes and lint automatically."
        },
      },
    },

    test: {
      default: {
        script: "nps lint.server.fix && mocha",
        description: "Use mocha to test the application."
      },
      watch: {
        script: npsUtils.concurrent.nps('lint.server.watch', 'lint.server.fix && mocha --watch ./tests ./'),
        description: "Watch application directory using the watch command."
      }
    },

    serve: {
      script: "nodemon --watch ./server --exec 'node ./server/app.js'",
      description: "Use nodemon to start a dev server that restarts when files need to be changed."
    }

  }
};
