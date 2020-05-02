/* ROUTER.JS */

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

// const controllers = require('../controllers');
const { middleware } = require('../middleware');
const actions = require('./../controllers');
const pages = require('./pages');

// ////////////////////////
// ROUTER OPTIONS
// ////////////////////////


// ////////////////////////
// APP CONFIGURATION
// ////////////////////////
const configure = (app) => {

  // Get token.
  app.get("/getToken", middleware.secure.requiresSecure, actions.getPageToken);
  app.post("/login", middleware.secure.requiresSecure, actions.User.login);
  app.post("/signup", middleware.secure.requiresSecure, actions.User.signup);
  app.get("/logout", middleware.secure.requiresSecure, actions.User.logout);

  // Configure GET requests for the pages.
  app.get(pages.dashboard.pattern, middleware.secure.requiresSecure, middleware.auth.requiresLogin, pages.dashboard.action);
  app.get(pages.login.pattern, middleware.secure.requiresSecure, middleware.auth.requiresLogout, pages.login.action);
  app.get(pages.signup.pattern, middleware.secure.requiresSecure, middleware.auth.requiresLogout, pages.signup.action);
  app.get(pages.pricing.pattern, middleware.secure.requiresSecure, pages.pricing.action);
  app.get(pages.about.pattern, middleware.secure.requiresSecure, pages.about.action);
  app.get(pages.contact.pattern, middleware.secure.requiresSecure, pages.contact.action);

  // Configure GET requests for all home / index pages.
  pages.homes.forEach((home) => {
    app.get(home.pattern, middleware.secure.requiresSecure, home.action);
  });
  
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
  configure,
};
