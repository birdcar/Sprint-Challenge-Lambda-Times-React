import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { card } = props;
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt={card.author} />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string,
  })
}

export default Card;
