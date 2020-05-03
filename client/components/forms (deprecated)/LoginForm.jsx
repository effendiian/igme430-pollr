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

// Component.
class LoginForm extends Component {
  render() {
    const { csrf, callback } = this.props;
    return (
      <UserForm id="mainForm" action="/login" submitValue="Log In" callback={callback} >
        <TextField id="user" name="username" title="Username" placeholder="username" ></TextField>
        <PasswordField id="password" name="password" title="Password" placeholder="password" ></PasswordField>
        <HiddenField name="_csrf" value={csrf} ></HiddenField>
      </UserForm>
    );
  }
}

// Prop type validation.
LoginForm.propTypes = {
  csrf: PropTypes.string,
  callback: PropTypes.func,
};

// ////////////////////////
// EXPORTS
// ////////////////////////

export default LoginForm;
