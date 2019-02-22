import React from 'react';
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

// Make sure you include prop types for all of your incoming props

export default Cards;