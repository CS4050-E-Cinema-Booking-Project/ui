import '../style/SelectSeatAge.css';

import React, { useState } from 'react';

function SelectSeatAge({ seatCount, displaySeatSelect }) {

    const [seats, setSeats] = useState(Array.from({ length: seatCount }, () => ({ age: "adult" })));

    if (seatCount != seats.length) {
        setSeats(Array.from({ length: seatCount }, () => ({ age: "adult" })));
    }

  const handleAgeChange = (index, event) => {
    document.getElementById('proceed2').style.display = 'block';
    const newSeats = [...seats];
    newSeats[index].age = event.target.value;
    setSeats(newSeats);
  };

  const handleSubmit = (event) => {
    document.getElementById('proceed2').style.display = 'none';
    event.preventDefault();
    for (var i = 0; i < seats.length; i++) {
        console.log("SEAT AT " + i +": " + seats[i].age);
    }
    displaySeatSelect();
  };

  return (
    <div className='age-select-container'>
      <form onSubmit={handleSubmit} className='age-select-form'>
        {seats.map((seat, index) => (
          <div key={index} className='age-select-individual'>

            <label>Seat {index + 1}:</label>
            <select value={seat.age} onChange={(event) => handleAgeChange(index, event)}>
                <option value="adult">Adult $15</option>
                <option value="child">Child $7</option>
                <option value="senior">Senior $10</option>
            </select>
              
          </div>
        ))}
        <button type="submit" id='proceed2' className='proceed-button'>Proceed</button>
      </form>
    </div>
  );
}


export default SelectSeatAge;