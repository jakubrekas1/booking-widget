import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Input } from './components/Input';

import './styles.scss';

const BookingDate = ({
  dateEnd,
  dateStart,
  onClick,
}) => {
  const onEndDateClick = useCallback(() => onClick(dateEnd), [dateEnd, onClick]);
  const onStartDateClick = useCallback(() => onClick(dateStart), [dateStart, onClick]);

  return (
    <div className="booking-date__outer">
      <div className="booking-date">
        <p className="booking-date__label">Dates</p>
        <div className="booking-date__wrapper">
          <Input onClick={onStartDateClick} placeholder="Check In" value={dateStart} />
          <i className="booking-date__arrow" />
          <Input onClick={onEndDateClick} placeholder="Check Out" value={dateEnd} />
        </div>
      </div>
    </div>
  );
};

BookingDate.defaultProps = {
  dateEnd: '',
  dateStart: '',
};

BookingDate.propTypes = {
  dateEnd: PropTypes.string,
  dateStart: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default BookingDate;
