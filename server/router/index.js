/* ROUTER.JS */

// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

// const controllers = require('../controllers');
const { middleware } = require('../middleware');

// ////////////////////////
// ROUTER OPTIONS
// ////////////////////////
// Routes would go here.
const routes = {
  getIndex: (req, res) => {
    res.render('home', { css: ['home'] });
  },
  getLogin: (req, res) => {
    res.render('login', { isLogin: true, css: ['login'] });
  },
  getSignup: (req, res) => {
    res.render('login', { isLogin: false, css: ['login'] });
  },
  getPricing: (req, res) => {
    res.render('pricing', { css: ['home'] });
  },
  getAbout: (req, res) => {
    res.render('about', { isAbout: true, css: ['home'] });
  },
  getContact: (req, res) => {
    res.render('about', { isAbout: false, css: ['home'] });
  },
};

// ////////////////////////
// APP CONFIGURATION
// ////////////////////////
const configure = (app) => {
  /* POST Methods */

  /* GET Methods */

  // App.

  // Login/Signup page.
  app.get('/login', middleware.secure.requiresSecure, middleware.auth.requiresLogout, routes.getLogin);
  app.get('/signup', middleware.secure.requiresSecure, middleware.auth.requiresLogout, routes.getSignup);

  // Pricing page.
  app.get('/pricing', middleware.secure.requiresSecure, routes.getPricing);

  // About/Contact page.
  app.get('/about', middleware.secure.requiresSecure, routes.getAbout);
  app.get('/contact', middleware.secure.requiresSecure, routes.getContact);

  // Home page.
  app.get('/home', middleware.secure.requiresSecure, routes.getIndex);
  app.get('/index', middleware.secure.requiresSecure, routes.getIndex);
  app.get('/', middleware.secure.requiresSecure, routes.getIndex);
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
  configure,
};
