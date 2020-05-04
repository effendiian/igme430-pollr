// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React from 'react';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Component.
const SignupForm = (props) => {
  const { csrf, onSubmit } = props;
  return (
    <form id="signupForm"
      onSubmit={ onSubmit }
      action="/signup"
      method="POST">
      <h1 id="formLabel" className="text-center">Sign In</h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className="form-control" placeholder="Enter your username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="form-control" placeholder="Enter your password" />
      </div>
      <div className="form-group">
        <label htmlFor="verifyPassword">Verify Password</label>
        <input id="verifyPassword" type="password" className="form-control" placeholder="Verify your password" />
      </div>
      <input type="hidden" id="csrf" name="_csrf" value={csrf} />
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>);
};

export default SignupForm;
