// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitField from './fields/SubmitField';

// ////////////////////////
// MEMBERS
// ////////////////////////

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

// Prop validation.
UserForm.propTypes = {
  id: PropTypes.string,
  callback: PropTypes.string,
  action: PropTypes.string,
  className: PropTypes.string,
  submitValue: PropTypes.string,
  children: PropTypes.node,
};

// ////////////////////////
// EXPORTS
// ////////////////////////

export default UserForm;
