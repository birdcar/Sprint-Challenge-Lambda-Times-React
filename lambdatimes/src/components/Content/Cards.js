import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  const { cards } = props;
  return (
    <div className="cards-container">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;