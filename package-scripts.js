
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
        script: "nps lint.client && nps lint.server && nps lint.test",
        description: "Lint all domains concurrently."
      },
      client: {
        default: {
          script: "esw ./client --color --ext .js --ext .jsx",
          description: "Lint client-side folder and subdirectories.",
        },
        fix: {
          script: "esw ./client --color --ext .js --ext .jsx --fix",
          description: "Lint and fix client-side folder and subdirectories."
        },
        watch: {
          script: "nodemon --watch ./client --exec \"esw ./client --color -w --ext .js --ext .jsx\"",
          description: "Watch client files for changes and lint automatically."
        }
      },
      server: {
        default: {
          script: "eslint ./server --color",
          description: "Lint the server files."
        },
        fix: {
          script: "eslint ./server --color --fix",
          description: "Lint the server files and fix them."
        },
        watch: {
          script: "nodemon --watch ./server --exec \"eslint ./server --color\"",
          description: "Watch client files for changes and lint automatically."
        },
      },
      test: {
        default: {
          script: "eslint ./test --color --config ./test/.eslintrc",
          description: "Lint test files."
        },
        fix: {
          script: "eslint ./test --color --fix --config ./test/.eslintrc",
          description: "Lint test files, automatically fixing issues where possible."
        },
        watch: {
          script: "nodemon --watch ./test --exec \"eslint ./test --color --config ./test/.eslintrc\"",
          description: "Same as fix, but watches for file changes."
        }
      },
    },

    test: {
      default: {
        script: `mocha --config ./.mocharc.yml`,
        description: "Use mocha to test the application."
      },
      watch: {
        script: `nodemon --watch ./test  --watch ./server --exec \"mocha --config ./.mocharc.yml\"`,
        description: "Repeats use of the mocha test suite using nodemon while watching for file changes."
      }
    },

    serve: {
      default: {
        script: "node ./server/app.js",
        description: "Lint and serve with nodemon.",
      },
      nodemon: {
        script: `nodemon --watch ./server --exec \"node ./server/app.js\"`,
        description: "Use nodemon to start a dev server that restarts when files need to be changed."
      }
    }

  }
};
