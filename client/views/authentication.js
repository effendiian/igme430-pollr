
// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////
import React from 'react';
import { render } from 'react-dom';
import SignupForm from '../components/form/SignupForm.jsx';
import util from '../util';

// ////////////////////////
// MEMBER INIT
// ////////////////////////
util.isLoaded('authentication.js');
console.log('Authentication: Displays form for login / signup.');

// Render the signup form.
window.addEventListener('load', () => {
  render(
    <SignupForm />, document.getElementById('content')
  );
});
