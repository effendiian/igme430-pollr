import React, { Component } from 'react';
import Input from './inputs/Input';
import Label from './inputs/Label';

// Number Field object.
class NumberField extends Component {
  render() {
    const {
      id,
      title,
      name,
      placeholder,
      value,
      min,
      max,
    } = this.props;

    return (
      <React.Fragment>
        <Label name={name} title={title} ></Label>
        <Input type="number" id={id} name={name} value={value} placeholder={placeholder} min={min} max={max} ></Input>
      </React.Fragment>
    );
  }
}

export default NumberField;
