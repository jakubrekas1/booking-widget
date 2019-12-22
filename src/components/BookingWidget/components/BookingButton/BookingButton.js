import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BookingButton = ({ disabled, onClick }) => (
  <button
    className="booking-button"
    disabled={disabled}
    onClick={onClick}
    type="submit"
  >
    Book now
  </button>
);

BookingButton.defaultProps = {
  disabled: false,
};

BookingButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default BookingButton;
