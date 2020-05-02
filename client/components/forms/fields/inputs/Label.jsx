import React, { Component } from 'react';

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

export default Label;
