// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './inputs/Input';

// ////////////////////////
// MAIN
// ////////////////////////

// Submit Field object.
class SubmitField extends Component {
  render() {
    const {
      id,
      className,
      value,
    } = this.props;

    return (<Input id={{ id }} className={{ className }} type="submit" value={{ value }} ></Input>);
  }
}

// Submit Field proptypes.
SubmitField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};

// ////////////////////////
// EXPORT
// ////////////////////////

export default SubmitField;
