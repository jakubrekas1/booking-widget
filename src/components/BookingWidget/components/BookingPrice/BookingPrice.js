import React from 'react';
import PropTypes from 'prop-types';

const BookingPrice = ({ amount, currency }) => (
  <div className="booking-price">
    <p className="booking-price__value">
      {`${amount} ${currency} `}
      <span className="booking-price__label">per night</span>
    </p>
  </div>
);

BookingPrice.defaultProps = {
  currency: 'zł',
};

BookingPrice.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currency: PropTypes.string,
};

export default BookingPrice;
