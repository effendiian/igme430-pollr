import React, { Component } from 'react';
import SubmitField from './fields/SubmitField';

// Generic form.
class UserForm extends Component {
  render() {
    const {
      id, callback, action, className, submitValue
    } = this.props;

    return (
      <form id={id}
        onSubmit={callback}
        action={action}
        method="POST"
        className={className}>
        {this.props.children}
        <SubmitField value={submitValue} className="formSubmit" ></SubmitField>
      </form>
    );
  }
}

export default UserForm;
