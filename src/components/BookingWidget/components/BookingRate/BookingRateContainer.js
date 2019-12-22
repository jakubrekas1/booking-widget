import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { STARS_NUMBER } from '../../../../constants';
import BookingRate from './BookingRate';

const BookingRateContainer = ({ rate, votes }) => {
  const formattedRate = useMemo(() => Math.fround(rate) * 2, [rate]);

  const stars = useMemo(() => [...Array(STARS_NUMBER * 2)].map((star, index) => {
    const isFilled = index < formattedRate ? 'booking-rate__star--fill' : '';
    return (
      <div
        className={`booking-rate__star ${isFilled}`}
        // No unique values in the array
        // eslint-disable-next-line
        key={index}
      />
    );
  }), [formattedRate]);

  return (
    <BookingRate stars={stars} votes={votes} />
  );
};

BookingRateContainer.defaultProps = {
  rate: 0,
  votes: 0,
};

BookingRateContainer.propTypes = {
  rate: PropTypes.number,
  votes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookingRateContainer;
