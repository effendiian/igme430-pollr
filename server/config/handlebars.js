// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

const path = require('path');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: path.resolve(`${__dirname}/../views/layouts/`),
    partialsDir: path.resolve(`${__dirname}/../views/partials/`),
};
 