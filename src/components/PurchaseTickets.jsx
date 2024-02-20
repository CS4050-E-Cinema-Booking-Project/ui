import React, { useState } from "react";
import SelectSeatAge from "./SelectSeatAge";
import SelectSeats from "./SelectSeats";
import '../style/PurchaseTickets.css';
import SelectSeatNumberForm from "./SelectSeatNumberForm";

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

          <SelectSeatNumberForm seatSelectChangeHandler={seatSelectChangeHandler} seatSelectFormHandler={seatSelectFormHandler} />

          {seatAgeSelect}

        {seatPlacementSelect}

      </div>

    </div>

  );
};

export default PurchaseTickets;