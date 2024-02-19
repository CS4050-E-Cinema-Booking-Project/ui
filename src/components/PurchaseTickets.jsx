import React, { useState } from "react";
import SelectSeatAge from "./SelectSeatAge";
import SelectSeats from "./SelectSeats";
import '../style/PurchaseTickets.css';

const PurchaseTickets = () => {

  const [seatAgeSelect, setSeatAgeSelect] = useState(null);
  const [seatCount, setSeatCount] = useState(1);
  const [seatPlacementSelect, setSeatPlacementSelect] = useState(null);

  const showSelectPopup = () => {
    var seatSelectComponent = <SelectSeats seatCount={seatCount} />
    setSeatPlacementSelect(seatSelectComponent);
  }

  const seatSelectChangeHandler = (event) => {
    document.getElementById('proceed1').style.display = 'block';
    setSeatCount(event.target.value);
  }

  const seatSelectFormHandler = (event) => {
    // setSeatAgeSelect(null);
    document.getElementById('proceed1').style.display = 'none';
    console.log("NUM OF SEATS: " + seatCount);
    event.preventDefault();
    event.preventDefault();
    var ageSelectComponent = <SelectSeatAge seatCount={seatCount} displaySeatSelect={showSelectPopup} />;
    setSeatAgeSelect(ageSelectComponent);
  }

  return (
    <div className="purchase-tickets-page">

      <div className="cover-image-container">
        <img className="movie-cover-image" src='https://www.dreamworks.com/storage/movies/shrek/shrek-he-digital.png' />
      </div>

        <div className="form-container">
          <div className="ticket-count-form-container">
          <form className="seat-select-form" onSubmit={seatSelectFormHandler}>
            <label for="seatCount">Number of Seats:</label>
            <select type="number" id="seatCount" onChange={seatSelectChangeHandler}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <button id="proceed1" type="submit">Proceed</button>
          </form>
        </div>

        <div className="ticket-age-container">
          {seatAgeSelect}
        </div>

        {seatPlacementSelect}

      </div>

    </div>

  );
};

export default PurchaseTickets;