import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '@codegraphy/react-daterange-picker';

import './styles.scss';

import {
  BookingButton,
  BookingDate,
  BookingPrice,
  BookingRate,
} from './components';

const BookingWidget = ({
  amount,
  calendarRef,
  currency,
  dateEnd,
  dateStart,
  defaultCurrentDate,
  lastUpdateDays,
  onCalendarChange,
  onSubmit,
  rate,
  reservedDates,
  setDefaultCurrentDate,
  setShowCalendar,
  showCalendar,
  votes,
}) => (
  <div className="booking-widget">
    <BookingPrice amount={amount} currency={currency} />
    <BookingRate rate={rate} votes={votes} />
    <div className="booking-widget__line" />
    <div className="booking-widget__calendar-wrapper">
      <BookingDate
        dateEnd={dateEnd}
        dateStart={dateStart}
        setDefaultCurrentDate={setDefaultCurrentDate}
        setShowCalendar={setShowCalendar}
      />
      {
        showCalendar && (
          <div className="booking-widget__datepicker" ref={calendarRef}>
            <Calendar
              defaultCurrentDate={defaultCurrentDate}
              defaultDateEnd={dateEnd}
              defaultDateStart={dateStart}
              onChange={onCalendarChange}
              reservedDates={reservedDates}
            />
            <p>Minimum stay varies</p>
            {
              lastUpdateDays && <p>{`Update ${lastUpdateDays} day${lastUpdateDays > 1 && 's'} ago`}</p>
            }
          </div>
        )
      }
    </div>
    <BookingButton disabled={!dateStart} onClick={onSubmit} />
  </div>
);

BookingWidget.defaultProps = {
  amount: 0,
  calendarRef: null,
  currency: 'zł',
  dateEnd: '',
  dateStart: '',
  defaultCurrentDate: '',
  lastUpdateDays: 0,
  rate: 0,
  reservedDates: [],
  votes: 0,
};

BookingWidget.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  calendarRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  currency: PropTypes.string,
  dateEnd: PropTypes.string,
  dateStart: PropTypes.string,
  defaultCurrentDate: PropTypes.string,
  lastUpdateDays: PropTypes.number,
  onCalendarChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  rate: PropTypes.number,
  reservedDates: PropTypes.arrayOf(PropTypes.string),
  setDefaultCurrentDate: PropTypes.func.isRequired,
  setShowCalendar: PropTypes.func.isRequired,
  showCalendar: PropTypes.bool.isRequired,
  votes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookingWidget;
