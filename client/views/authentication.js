// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

import React from 'react';
import util from '../util';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';
import UserPrompt from '../components/forms/fragments/UserPrompt';

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
    formLabel: '#formLabel',
  })
);

// Render form title.
const renderTitle = (text) => {
  util.view.renderPlaceholder(
    text,
    page.elements.formLabel
  );
};

// Render the prompt.
const renderPrompt = (component) => {
  util.view.renderComponent(
    component,
    page.elements.prompt
  );
};

// Render component to Resources.
const renderForm = (component) => {
  util.view.renderComponent(
    component,
    page.elements.form,
  );
};

// Render login form.
const renderLoginForm = (csrf) => {
  renderTitle('Sign In');
  renderPrompt(<UserPrompt isLogin />);
  renderForm(
    <LoginForm csrf={csrf} onSubmit={(e) => {
      e.preventDefault();
      console.log('Logging in!');
    }} />
  );
};

// Render signup form.
const renderSignupForm = (csrf) => {
  renderTitle('Sign Up');
  renderPrompt(<UserPrompt />);
  renderForm(
    <SignupForm csrf={csrf} onSubmit={(e) => {
      e.preventDefault();
      console.log('Signing up!');
    }}/>
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
