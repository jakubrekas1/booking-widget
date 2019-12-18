import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BookingRate = ({ stars, votes }) => (
  <div className="booking-rate">
    {stars}
    <div className="booking-rate__votes">{votes}</div>
  </div>
);

BookingRate.defaultProps = {
  votes: 0,
};

BookingRate.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.node).isRequired,
  votes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookingRate;
