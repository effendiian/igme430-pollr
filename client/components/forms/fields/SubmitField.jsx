import React, { Component } from 'react';

// Submit Field object.
class SubmitField extends Component {
  render() {
    const {
      id,
      className,
      value,
    } = this.props;

    return (<input type="submit" id={id} className={className} value={value} />);
  }
}

export default SubmitField;
