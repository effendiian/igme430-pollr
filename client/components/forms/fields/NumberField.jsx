// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './inputs/Input';
import Label from './inputs/Label';

// ////////////////////////
// MEMBERS
// ////////////////////////

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

// Prop type validation.
NumberField.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.number,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
};

// ////////////////////////
// EXPORT
// ////////////////////////

export default NumberField;
