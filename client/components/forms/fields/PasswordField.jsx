import React, { Component } from 'react';

// Password Field object.
class PasswordField extends Component {
  render() {
    const {
      id,
      className,
      value,
      placeholder,
    } = this.props;

    return (<input type="password" id={id} className={className} value={value} placeholder={placeholder} />);
  }
}

export default PasswordField;
