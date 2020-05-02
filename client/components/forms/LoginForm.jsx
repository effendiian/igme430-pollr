import React, { Component } from 'react';
import UserForm from './UserForm';
import TextField from './fields/TextField';
import PasswordField from './fields/PasswordField';
import HiddenField from './fields/HiddenField';

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

export default LoginForm;
