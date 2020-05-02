import React, { Component } from 'react';

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

    if (hidden || type === 'hidden') {
      return (
        <input id={id} type="hidden" name={name} value={value} />
      );
    } if (type === 'number') {
      return (
        <input id={id} type="number" name={name} placeholder={placeholder} min={min} max={max} />
      );
    }
    return (
      <input id={id} type="text" name={name} placeholder={placeholder} />
    );
  }
}

export default Input;
