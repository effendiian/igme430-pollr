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
// HANDLERS
// ////////////////////////

// Get data from the form.
const serializeLoginForm = ({ username, password, csrf }) => util.helpers.serializeData([
  { name: '_csrf', value: csrf },
  { name: 'username', value: username },
  { name: 'password', value: password },
]);

const handleLogin = function submitLoginForm(e) {
  e.preventDefault();

  // Hide notification, if present.
  // util.view.hideNotifications(document.querySelector('#notification'));

  // Get user input from the form.
  const input = {
    csrf: document.querySelector('input[name=_csrf]').value,
    username: document.querySelector('#username').value,
    password: document.querySelector('#password').value,
  };

  console.dir(input);

  if (input.username === '' || input.password === '') {
    console.log('Test: 1');
    util.view.handleError(
      "Whoops! You're missing some fields!",
      document.querySelector('#notification'),
      4000
    );
    return false;
  }

  const form = document.querySelector('#loginForm');
  const request = {
    action: form.getAttribute('action'),
    body: serializeLoginForm(input),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };

  console.dir(request);

  // Send ajax.
  util.ajax.post(request.action, request.body, request.headers).catch((er) => {
    util.view.handleError(
      er.response.error,
      document.querySelector('#notification'),
      4000
    );
  });
  return false;
};

// Get data from the form.
const serializeSignupForm = ({
  username, password, verifyPassword, csrf
}) => util.helpers.serializeData([
  { name: '_csrf', value: csrf },
  { name: 'username', value: username },
  { name: 'password', value: password },
  { name: 'verifyPassword', value: verifyPassword },
]);

// Handle signing up.
const handleSignup = function submitSignupForm(e) {
  e.preventDefault();

  // Hide notification, if present.
  // util.view.hideNotifications(document.querySelector('#notification'));

  // Get user input from the form.
  const input = {
    csrf: document.querySelector('input[name=_csrf]').value,
    username: document.querySelector('#username').value,
    password: document.querySelector('#password').value,
    verifyPassword: document.querySelector('#verifyPassword').value,
  };

  console.dir(input);

  if (input.username === '' || input.password === '' || input.verifyPassword === '') {
    util.view.handleError(
      "Whoops! You're missing some fields!",
      document.querySelector('#notification'),
      4000
    );
    return false;
  }

  if (input.password !== input.verifyPassword) {
    util.view.handleError(
      "Whoops! Your passwords don't match!",
      document.querySelector('#notification'),
      4000
    );
    return false;
  }

  const form = document.querySelector('#signupForm');
  const request = {
    action: form.getAttribute('action'),
    body: serializeSignupForm(input),
  };

  console.dir(request);

  // Send ajax.
  util.ajax.post(request.action, request.body, {
    'Content-Type': 'application/x-www-form-urlencoded'
  }).catch((er) => {
    util.view.handleError(
      er.response.error,
      document.querySelector('#notification'),
      4000
    );
  });
  return false;
};

// ////////////////////////
// UI
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
    <LoginForm csrf={csrf} onSubmit={handleLogin} />
  );
};

// Render signup form.
const renderSignupForm = (csrf) => {
  renderTitle('Sign Up');
  renderPrompt(<UserPrompt />);
  renderForm(
    <SignupForm csrf={csrf} onSubmit={handleSignup}/>
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

// ////////////////////////
// RENDER
// ////////////////////////

// Run this function to render the window on load.
util.helpers.onLoad(1000)
  .then(() => page.load())
  .then(() => clearPage())
  .then(() => getCSRFToken())
  .then((token) => setup(token))
  .catch((e) => {
    console.error(e);
  });
