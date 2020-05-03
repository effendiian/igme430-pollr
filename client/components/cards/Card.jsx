// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureList from './fragments/FeatureList';

// ////////////////////////
// MEMBERS
// ////////////////////////


// Component.
export default class Card extends Component {
  render() {
    const {
      title = 'Monthly Paid',
      src = '/assets/img/composition.png',
      price = '$0.00',
      button = {
        href: '#',
        title: 'Sign Up',
      },
      list = <FeatureList />
    } = this.props;
    return (
      <div className="card w-25 mx-1 text-center shadow">
        <div className="card-header bg-light text-success">{title}</div>
        <img src={src} className="card-img-top" alt="Placeholder image"/>
        <div className="card-body">
          <h6 className="card-title">{"Here's what you get:"}</h6>
          {React.cloneElement(list)}
          <p className="card-text lead">{price}</p>
          <a href={button.href} className="btn btn-primary shadow-sm">{button.title}</a>
        </div>
      </div>
    );
  }
}

// Prop type validation.
Card.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.string,
  button: PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string,
  }),
  list: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.instanceOf(FeatureList))),
};
