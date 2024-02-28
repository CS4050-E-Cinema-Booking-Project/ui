import React, { useState } from 'react';
import '../style/MovieTimeSelect.css';

const MovieTimeSelect = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="movie-time-container">
      <h2>Choose a Movie Time</h2>
      <div className="time-buttons">
        <button
          className={`time-button ${selectedTime === '9:00 AM' ? 'selected' : ''}`}
          onClick={() => handleTimeSelect('9:00 AM')}
        >
          9:00 PM
        </button>
        <button
          className={`time-button ${selectedTime === '9:30 AM' ? 'selected' : ''}`}
          onClick={() => handleTimeSelect('9:30 AM')}
        >
          9:30 PM
        </button>
        <button
          className={`time-button ${selectedTime === '10:00 AM' ? 'selected' : ''}`}
          onClick={() => handleTimeSelect('10:00 AM')}
        >
          10:00 PM
        </button>
      </div>
      <p>{selectedTime}</p>
    </div>
  );
};

export default MovieTimeSelect;
