// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaElementThumbnail, { MediaElementIcon } from './fragments/MediaElementThumbnail';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Component.
export default class MediaElement extends Component {
  render() {
    const {
      thumbnail = <MediaElementThumbnail icon={ { id: 'face', size: 'md-48' } } img={false} />,
      title = 'Resource',
      description = 'Description',
      link = {
        href: '#',
        isStretched: true,
      },
    } = this.props;
    return (
      <div className="media position-relative my-3 p-3 bg-light shadow">
        <span className="d-block mr-1">
          {React.cloneElement(thumbnail)}
        </span>
        <div className="media-body">
          <h5 className="mt-0">{title}</h5>
          <p className="lead">{description}</p>
          <a href={link ? link.href : '#'} className={link && link.isStretched ? 'stretched-link' : ''} target="_blank" rel="noopener noreferrer" >Visit resource page.<i className="material-icons md-18">open_in_new</i></a>
        </div>
      </div>
    );
  }
}

// Validation.
MediaElement.propTypes = {
  thumbnail: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    isStretched: PropTypes.bool,
  }),
};
