import React from "react";
import '../style/SelectSeats.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectSeats = ( {seatCount, currId} ) => {

    const navigate = useNavigate();

    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (seatIndex) => {
      if (selectedSeats.includes(seatIndex)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatIndex));
      } else if (selectedSeats.length < seatCount) {
        setSelectedSeats([...selectedSeats, seatIndex]);
      }
    };

    const purchaseButtonHandler = () => {
        if (selectedSeats.length < seatCount) {
            var warning = document.getElementById('select-all-seats-warning');
            warning.style.display = 'block';
        } else {
            navigate('/checkout');
        }
    }
  
    return (
      <div className="seat-selection-container">
        <h2 className="seat-selection-header">Seat Selection</h2>
        <p className="available-seats-label">Available Seats: {seatCount - selectedSeats.length}</p>
        <hr className="screen"></hr>
        <p className="screen-label">Screen</p>
        <div className="seat-grid">
          {Array.from({ length: 50 }, (_, i) => (

            <div
              key={i}
              className={`seat ${selectedSeats.includes(i) ? 'selected' : ''}`}
              onClick={() => toggleSeat(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <button onClick={purchaseButtonHandler} className="purchase-button">Purchase</button>
        <p id="select-all-seats-warning">Please select all seats</p>
      </div>
    );
}

export default SelectSeats;