// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Label component.
class Label extends Component {
  render() {
    const {
      title,
      name,
    } = this.props;

    return (
      <label htmlFor={name}>{title}: </label>
    );
  }
}

// Prop type validation.
Label.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};


// ////////////////////////
// EXPORT
// ////////////////////////

export default Label;
