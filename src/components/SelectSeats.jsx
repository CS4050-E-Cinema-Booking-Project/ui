import React from "react";
import '../style/SelectSeats.css';
import { NavLink } from "react-router-dom";

const SelectSeats = (props) => {


    return (
        <div className="select-seats">
            <h1>Select Seats</h1>
            <div>
                <h2>Display Seat Selection Here</h2>
            </div>
            <button className="pay-button"><NavLink to={`/checkout`}>Pay</NavLink></button>
        </div>
    )
}

export default SelectSeats;