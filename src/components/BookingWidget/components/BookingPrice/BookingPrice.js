import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BookingPrice = ({ amount, currency }) => (
  <div className="booking-price">
    <p className="booking-price__value">
      {`${amount} ${currency} `}
      <span className="booking-price__label">per night</span>
    </p>
  </div>
);

BookingPrice.defaultProps = {
  amount: 0,
  currency: 'zł',
};

BookingPrice.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string,
};

export default BookingPrice;
