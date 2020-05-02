import React, { Component } from 'react';
import Input from './inputs/Input';
import Label from './inputs/Label';

// Text Field object.
class TextField extends Component {
  render() {
    const {
      id,
      title,
      name,
      placeholder,
      value,
    } = this.props;

    return (
      <React.Fragment>
        <Label name={name} title={title} ></Label>
        <Input type="text" id={id} name={name} value={value} placeholder={placeholder} ></Input>
      </React.Fragment>
    );
  }
}

export default TextField;
