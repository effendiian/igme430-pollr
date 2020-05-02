// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Input component.
class Input extends Component {
  render() {
    const {
      id,
      name,
      placeholder,
      hidden,
      value,
      type,
      min,
      max,
    } = this.props;

    const isVisible = (type !== 'hidden' && !hidden);
    const isNumber = (type === 'number');

    return (<input id={id} type={type} name={name} value={value} placeholder={placeholder && isVisible} hidden={hidden} min={min && isVisible && isNumber} max={max && isVisible && isNumber} />);
  }
}

// Prop types.
Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  // Value of an element.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  // Boolean flag describing if the element is hidden or not.
  hidden: PropTypes.bool,
  // Reflects input type of an HTML <input> element.
  type: PropTypes.oneOf(['button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week']),
  // Minimum number in the range.
  min: PropTypes.number,
  // Maximum number in the range.
  max: PropTypes.number,
};


// ////////////////////////
// EXPORT
// ////////////////////////

export default Input;
