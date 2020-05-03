// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './inputs/Input';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Hidden Field object.
class HiddenField extends Component {
  render() {
    const {
      id,
      name,
      value,
    } = this.props;

    return (<Input type="hidden" hidden id={id} name={name} value={value} ></Input>);
  }
}

// Prop type validation.
HiddenField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

// ////////////////////////
// EXPORT
// ////////////////////////

export default HiddenField;
