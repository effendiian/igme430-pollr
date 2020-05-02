
// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/LoginForm';
import util from '../util';

// ////////////////////////
// MEMBER INIT
// ////////////////////////

util.isLoaded('authentication.js');

// Validate form information.
const handle = {
  login: (e) => {
    e.preventDefault();
    util.clearNotification();

    const usernameField = document.getElementById('user');
    const passwordField = document.getElementById('password');

    if (usernameField.value == '' || passwordField.value == '') {
      util.setErrorMessage('Username or Password is empty.');
      return false;
    }

    const form = document.getElementById('loginForm');
    const csrfField = document.querySelector('input[name=_csrf]');

    util.postAjax({
      csrfToken: csrfField.value,
      username: usernameField.value,
      password: passwordField.value,
    }, form.action, { 'Content-Type': 'application/x-www-form-urlencoded' });
    return false;
  },
  signup: (e) => {
    e.preventDefault();
    util.clearNotification();

    const usernameField = document.getElementById('user');
    const passwordField = document.getElementById('password');
    const verifyPasswordField = document.getElementById('verifyPassword');

    if (usernameField.value == '' || passwordField.value == '' || verifyPasswordField.value == '') {
      util.setErrorMessage('Username or Password is empty.');
      return false;
    }

    if (passwordField.value !== verifyPasswordField.value) {
      util.setErrorMessage('Passwords do not match.');
      return false;
    }

    const form = document.getElementById('loginForm');
    const csrfField = document.querySelector('input[name=_csrf]');

    util.postAjax({
      csrfToken: csrfField.value,
      username: usernameField.value,
      password: passwordField.value,
    }, form.action, { 'Content-Type': 'application/x-www-form-urlencoded' });
    return false;
  },
};

const create = {
  login: (csrf) => {
    ReactDOM.render(
      <LoginForm csrf={csrf} callback={handle.login} />,
      document.querySelector('#content')
    );
  },
  signup: (csrf) => {
    ReactDOM.render(
      <SignupForm csrf={csrf} callback={handle.signup} />,
      document.querySelector('#content')
    );
  },
};

// Setup the page.
const setup = (csrf) => {
  // Buttons.
  const button = {
    login: document.getElementById('loginButton'),
    signup: document.getElementById('signupButton'),
  };

  console.log('Is this working?');

  button.login.addEventListener('click', (e) => {
    e.preventDefault();
    create.signup(csrf);
    return false;
  });

  button.signup.addEventListener('click', (e) => {
    e.preventDefault();
    create.login(csrf);
    return false;
  });

  // Default to the login window.
  create.login(csrf);
};

// Run when ready.
const ready = () => {
  util.getToken().then((result) => {
    console.log(`Status: ${result.status}`);
    setup(result.csrfToken);
  }).catch((e) => {
    console.error('There was an issue authenticating your request to the server.', e);
  });
};

// Render the signup form.
window.addEventListener('load', ready);
