// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

const path = require('path');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
    path: {
        assets: path.resolve(`${__dirname}/../../hosted/`), 
        favicon: path.resolve(`${__dirname}/../../hosted/img/favicon.png`),
        views: path.resolve(`${__dirname}/../views`)
    },
};
 