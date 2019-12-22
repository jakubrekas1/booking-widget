import React from 'react';
import PropTypes from 'prop-types';

import BookingDate from './BookingDate';

const BookingDateContainer = ({
  dateEnd, dateStart, setDefaultCurrentDate, setShowCalendar,
}) => {
  const handleDateClick = (date) => {
    setDefaultCurrentDate(date);
    setShowCalendar((visible) => !visible);
  };

  return (
    <BookingDate
      dateEnd={dateEnd}
      dateStart={dateStart}
      onClick={handleDateClick}
    />
  );
};

BookingDateContainer.defaultProps = {
  dateEnd: '',
  dateStart: '',
};

BookingDateContainer.propTypes = {
  dateEnd: PropTypes.string,
  dateStart: PropTypes.string,
  setDefaultCurrentDate: PropTypes.func.isRequired,
  setShowCalendar: PropTypes.func.isRequired,
};

export default BookingDateContainer;
