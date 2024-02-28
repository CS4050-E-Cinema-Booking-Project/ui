import React from "react";
import '../style/CheckoutConfirm.css'
import MoviePoster from "../images/61FlZy7HEOL._AC_UF894,1000_QL80_.jpg"
import { Link } from "react-router-dom";

const CheckoutConfirm = () => {
  
  return (
    <div>
      <h1 className="check-confirm-title">Enjoy the show!</h1>
      <h3>A confirmation and order summary have been sent to your email.</h3>
      <h3 className="order-detail-title">Order Summary:</h3>
      <div className="order-summary">
        <img className="order-summary-poster" src={MoviePoster} alt="Poster"></img>
        <h1 className="order-movie-title">Troy</h1>
        <div className="order-movie-details">
          <h3>Showing | 8pm</h3>
          <h3>Total | 30$</h3>
        </div>
        <Link to="/" className="return-home">
          Continue Browsing
        </Link>
      </div>
    </div>
  );
};

export default CheckoutConfirm;