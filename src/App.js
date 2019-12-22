import React, { useEffect, useState } from 'react';
import './App.css';

import { BookingWidget } from './components/BookingWidget';

function App() {
  const [reservedDates, setReservedDates] = useState([]);

  // Fetch example data
  useEffect(() => {
    const data = [
      '2019-12-06 00:00:00',
      '2019-12-07 00:00:00',
      '2019-12-08 00:00:00',
      '2019-12-16 00:00:00',
      '2019-12-24 00:00:00',
      '2019-12-25 00:00:00',
      '2019-12-26 00:00:00',
    ];

    setReservedDates(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BookingWidget
          amount={100}
          currency="zł"
          lastUpdateDays={15}
          rate={3.5}
          reservedDates={reservedDates}
          votes={123}
        />
      </header>
    </div>
  );
}

export default App;
