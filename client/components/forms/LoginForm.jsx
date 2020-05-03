// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React from 'react';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Component.
const LoginForm = (props) => {
  const { csrf, onSubmit } = props;
  return (
    <form id="loginForm"
      onSubmit={onSubmit}
      action="/login"
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
      <input type="hidden" id="csrf" name="_csrf" value={csrf} hidden />
      <button type="submit" className="btn btn-primary">Login</button>
    </form>);
};

export default LoginForm;
