// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

import React from 'react';
import util from '../util';

// ////////////////////////
// MEMBER INIT
// ////////////////////////

const { ElementStore, SelectorTable } = util.elements;

// ////////////////////////
// MEMBERS
// ////////////////////////

// Selectors for the elements.
const page = new ElementStore(
  new SelectorTable({
    root: '#content',
    form: '#mainForm',
    loginButton: '#loginButton',
    signupButton: '#signupButton',
    prompt: '#formPrompt',
  })
);

// Render component to Resources.
const renderResourceComponent = (component) => {
  util.view.renderComponent(
    component,
    page.elements.form,
  );
};

// Render login form.
const renderLoginForm = (csrf) => {
  renderResourceComponent(
    <div>Login Form</div>
  );
};

// Render signup form.
const renderSignupForm = (csrf) => {
  renderResourceComponent(
    <div>Signup Form</div>
  );
};

// Clear the page.
const clearPage = () => {
  // Clear the table.
  console.dir(page.elements.root);
  page.elements.form.innerHTML = '';
  page.elements.prompt.innerHTML = '';
};

// Get the CSRF token and log it to the console.
const getCSRFToken = () => util.ajax.getToken();

// Setup the current page using the csrfToken.
const setup = (csrfToken) => {
  // Add the the event listeners.
  page.elements.loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderLoginForm(csrfToken);
    return false;
  });

  page.elements.signupButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderSignupForm(csrfToken);
    return false;
  });

  const windowPath = window.location.pathname.substring(0, 7);
  console.log(windowPath);
  if (windowPath === '/signup') {
    renderSignupForm(csrfToken);
  } else {
    renderLoginForm(csrfToken);
  }
};

// On render, this will run.
const renderPage = () => {

};

// ////////////////////////
// RENDER
// ////////////////////////

// Run this function to render the window on load.
util.helpers.onLoad(1000)
  .then(() => page.load())
  .then(() => clearPage())
  .then(() => getCSRFToken())
  .then((token) => setup(token))
  .then(() => renderPage())
  .catch((e) => {
    console.error(e);
  });
