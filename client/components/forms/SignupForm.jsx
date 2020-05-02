// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import TextField from './fields/TextField';
import PasswordField from './fields/PasswordField';
import HiddenField from './fields/HiddenField';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Component
class SignupForm extends Component {
  render() {
    const { csrf, callback } = this.props;
    return (
      <UserForm id="mainForm" action="/signup" submitValue="Sign Up" callback={callback} >
        <TextField id="user" name="username" title="Username" placeholder="Username" ></TextField>
        <PasswordField id="password" name="password" title="Password" placeholder="Password" ></PasswordField>
        <PasswordField id="verifyPassword" name="verifyPassword" title="Verify Password" placeholder="Password" ></PasswordField>
        <HiddenField name="_csrf" value={csrf} ></HiddenField>
      </UserForm>
    );
  }
}

// Prop type validation.
SignupForm.propTypes = {
  csrf: PropTypes.string,
  callback: PropTypes.func,
};

// ////////////////////////
// EXPORTS
// ////////////////////////

export default SignupForm;
