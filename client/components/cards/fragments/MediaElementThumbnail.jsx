// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Prepare an Icon element.
const MediaElementIcon = (props) => (<i className={`material-icons ${props.size}`}>{props.id}</i>);

// Prepare an Image element.
const MediaElementImage = (props) => (<img src={props.src} className={props.className} alt={props.alt} style={{ height: props.size, width: props.size }} ></img>);

// Component.
export default class MediaElementThumbnail extends Component {
  render() {
    const {
      icon = {
        id: 'face',
        size: 'md-48',
      },
      img = {
        alt: 'Resource thumbnail',
        src: 'https://webpack.js.org/dcd5e077cf9f54ebe52d4f7ebe8c3080.png',
        className: '',
        size: '48px'
      },
    } = this.props;
    return (
      <span className="d-block mr-1">
        {icon ? <MediaElementIcon id={icon.id} size={icon.size} /> : '' }
        {img ? <MediaElementImage src={img.src} size={img.size} className={img.className} alt={img.alt} /> : '' }
      </span>
    );
  }
}

export { MediaElementIcon, MediaElementImage };

// Validation.
MediaElementThumbnail.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.string,
      size: PropTypes.string,
    }),
  ]),
  img: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      alt: PropTypes.string,
      src: PropTypes.string,
      className: PropTypes.string,
      size: PropTypes.string,
    }),
  ]),

};
