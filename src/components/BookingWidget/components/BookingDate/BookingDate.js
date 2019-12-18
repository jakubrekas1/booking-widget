import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './components/Input';

import './styles.scss';

const BookingDate = ({
  dateEnd,
  dateStart,
  onClick,
  showCalendar,
}) => {
  const onEndDateClick = () => onClick(dateEnd);
  const onStartDateClick = () => onClick(dateStart);

  return (
    <div className="booking-date__outer">
      {showCalendar && <div>Datepicker here</div>}
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
  showCalendar: false,
};

BookingDate.propTypes = {
  dateEnd: PropTypes.string,
  dateStart: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  showCalendar: PropTypes.bool,
};

export default BookingDate;
