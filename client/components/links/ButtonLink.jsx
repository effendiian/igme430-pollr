// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Component.
class ButtonLink extends Component {
  render() {
    const { id, title, href, target, color, shadow, border, margin, padding, isStretched } = this.props;
    let className = 'btn';
    className += [color, shadow, border, margin, padding].join(" ");
    className += ` ${(isStretched) ? 'stretched-link' : ''}`;
    return (
        <a id={id} href={href} target={target} className={className} >
            {title}
        </a>
    );
  }
}

// Prop type validation.
ButtonLink.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    color: PropTypes.string,
    shadow: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    border: PropTypes.string,
    isStretched: PropTypes.bool,
};

// ////////////////////////
// EXPORTS
// ////////////////////////

export default ButtonLink;
