/* ROUTER.JS */

//////////////////////////
// MODULE/LIBRARY IMPORT
//////////////////////////
const controllers = require('./../controllers');
const middleware = require('./../middleware');

//////////////////////////
// ROUTER OPTIONS
//////////////////////////
// Routes would go here.
const routes = {};


//////////////////////////
// APP CONFIGURATION
//////////////////////////
const configure = (app) => {

    app.get('/', (req, res) => {
        res.render('home', { layout: 'main' });
    });

};

//////////////////////////
// EXPORT
//////////////////////////
module.exports = {
    configure
};