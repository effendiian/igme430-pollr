// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const actions = require('./../../controllers');

// ////////////////////////
// MEMBER INIT
// ////////////////////////

// Actions and their patterns.
const routes = {
    homes: [
        { method: 'get', pattern: '/', action: actions.getPageAction('pages/home') },
        { method: 'get', pattern: '/index', action: actions.getPageAction('pages/home') },
        { method: 'get', pattern: '/home', action: actions.getPageAction('pages/home') },
    ],
    about: { method: 'get', pattern: '/about', action: actions.getPageAction('pages/about') },
    contact: { method: 'get', pattern: '/contact', action: actions.getPageRedirect('/about#contact') },
    dashboard: { method: 'get', pattern: '/dashboard', action: actions.getPageAction('pages/app') },
    login: { method: 'get', pattern: '/login', action: actions.getPageForm('pages/login') },
    signup: { method: 'get', pattern: '/signup', action: actions.getPageForm('pages/login') },
    pricing: { method: 'get', pattern: '/pricing', action: actions.getPageAction('pages/pricing') },
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = routes;