import React from 'react';
import PropTypes from 'prop-types';

const BookingButton = ({ onClick }) => (
  <button
    className="booking-button"
    onClick={onClick}
    type="submit"
  >
    Book now
  </button>
);

BookingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BookingButton;
