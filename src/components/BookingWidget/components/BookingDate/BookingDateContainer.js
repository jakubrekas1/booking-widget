import React, { useState } from 'react';

import BookingDate from './BookingDate';

const BookingDateContainer = () => {
  const [defaultCurrentDate, setDefaultCurrentDate] = useState(null);

  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarChange = (range) => {
    setDateStart(range.dateStart);
    setDateEnd(range.dateEnd);
  };

  const handleDateClick = (date) => {
    setDefaultCurrentDate(date);
    setShowCalendar(true);
  };

  return (
    <BookingDate
      dateEnd={dateEnd}
      dateStart={dateStart}
      defaultCurrentDate={defaultCurrentDate}
      onCalendarChange={handleCalendarChange}
      onClick={handleDateClick}
      showCalendar={showCalendar}
    />
  );
};

export default BookingDateContainer;
