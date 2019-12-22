import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '@codegraphy/react-daterange-picker/services';

import BookingWidget from './BookingWidget';

const BookingWidgetContainer = ({
  amount, currency, lastUpdateDays, onSubmit, rate, reservedDates, votes,
}) => {
  const [defaultCurrentDate, setDefaultCurrentDate] = useState(null);
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const calendarRef = useRef();
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarChange = useCallback((range) => {
    setDateStart(formatDate(range.dateStart));
    setDateEnd(formatDate(range.dateEnd));
  }, [setDateEnd, setDateStart]);

  const handleSubmit = () => onSubmit({
    amount,
    currency,
    dateEnd,
    dateStart,
  });

  // Hide calendar on click outside
  useEffect(() => {
    const hideCalendar = (e) => {
      if (
        showCalendar
        && calendarRef.current
        && !calendarRef.current.contains(e.target)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('click', hideCalendar);

    return () => {
      document.removeEventListener('click', hideCalendar);
    };
  }, [showCalendar]);

  return (
    <BookingWidget
      amount={amount}
      calendarRef={calendarRef}
      currency={currency}
      dateEnd={dateEnd}
      dateStart={dateStart}
      defaultCurrentDate={defaultCurrentDate}
      lastUpdateDays={lastUpdateDays}
      onCalendarChange={handleCalendarChange}
      onSubmit={handleSubmit}
      rate={rate}
      reservedDates={reservedDates}
      setDefaultCurrentDate={setDefaultCurrentDate}
      setShowCalendar={setShowCalendar}
      showCalendar={showCalendar}
      votes={votes}
    />
  );
};

BookingWidgetContainer.defaultProps = {
  amount: 0,
  currency: 'zł',
  lastUpdateDays: 0,
  onSubmit: (values) => console.log(values),
  rate: 0,
  reservedDates: [],
  votes: 0,
};

BookingWidgetContainer.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string,
  lastUpdateDays: PropTypes.number,
  onSubmit: PropTypes.func,
  rate: PropTypes.number,
  reservedDates: PropTypes.arrayOf(PropTypes.string),
  votes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookingWidgetContainer;
