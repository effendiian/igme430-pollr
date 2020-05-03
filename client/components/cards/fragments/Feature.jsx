// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ////////////////////////
// MEMBERS
// ////////////////////////

export default class Feature extends Component {
  render() {
    const {
      label, enabled
    } = this.props;
    const icon = enabled ? 'done_outline' : 'not_interested';
    const content = label || 'Example Feature';
    return (
      <li className="text-center mr-1">
        <span className="p-0 badge d-inline-block "><i className="material-icons md-18">{icon}</i></span>
        <span className="d-inline-block align-top">{content}</span>
      </li>
    );
  }
}

// Prop type validation.
Feature.propTypes = {
  label: PropTypes.string,
  enabled: PropTypes.bool,
};
