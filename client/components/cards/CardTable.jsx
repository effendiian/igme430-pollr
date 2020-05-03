// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Render cards.
const renderCards = (cards) => cards.map((card, i) => React.cloneElement(card, { key: i.toString() }));

// Component.
export default class CardTable extends Component {
  render() {
    const {
      cards = [
        <Card key={0} title="Card 1" />,
        <Card key={1} title="Card 2" />,
        <Card key={2} title="Card 3" />,
      ],
    } = this.props;
    return (
      <div className="row justify-content-center mx-5">
        {renderCards(cards)}
      </div>
    );
  }
}

// Prop type validation.
CardTable.propTypes = {
  cards: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.instanceOf(Card))),
};
