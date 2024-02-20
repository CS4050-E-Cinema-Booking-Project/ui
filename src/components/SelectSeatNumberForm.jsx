import React from "react";
import '../style/SelectSeatNumberForm.css'

const SelectSeatNumberForm = (props) => {
    
    return (
        <form className="seat-select-form" onSubmit={props.seatSelectFormHandler}>
        <label for="seatCount">Number of Seats:</label>
        <select type="number" id="seatCount" onChange={props.seatSelectChangeHandler}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
        <button id="proceed1" type="submit">Proceed</button>
      </form>
    )
}

export default SelectSeatNumberForm;