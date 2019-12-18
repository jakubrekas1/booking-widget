import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import {
  BookingButton,
  BookingDate,
  BookingPrice,
  BookingRate,
} from './components';

const BookingWidget = ({
  amount,
  currency,
  rate,
  votes,
}) => (
  <div className="booking-widget">
    <BookingPrice amount={amount} currency={currency} />
    <BookingRate rate={rate} votes={votes} />
    <div className="booking-widget__line" />
    <div className="booking-widget__calendar-wrapper">
      <BookingDate />
    </div>
    <BookingButton onClick={() => null} />
  </div>
);

BookingWidget.defaultProps = {
  currency: 'zł',
  rate: 0,
  votes: 0,
};

BookingWidget.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currency: PropTypes.string,
  rate: PropTypes.number,
  votes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookingWidget;
