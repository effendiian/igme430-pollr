import React, { Component } from 'react';
import Input from './inputs/Input';

// Hidden Field object.
class HiddenField extends Component {
  render() {
    const {
      id,
      name,
      placeholder,
      value,
    } = this.props;

    return (<Input type="hidden" hidden id={id} name={name} value={value} ></Input>);
  }
}

export default HiddenField;
