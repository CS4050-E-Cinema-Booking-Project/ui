import React from 'react';
import '../style/OrderSummary.css';
import MoviePoster from "../images/61FlZy7HEOL._AC_UF894,1000_QL80_.jpg"
import { useNavigate } from 'react-router-dom';


const OrderSummary = () => {
  const navigate = useNavigate();

  const cancelButtonHandler = () => {
    navigate('/');
  }

  const updateButtonHandler = () => {
    navigate('/purchase-tickets/2')
  }

  const confirmButtonHandler = () => {
    navigate('/checkout');
  }

  return (
    <div className="order-summary">
      <div className="movie-details">
        <h3 className="movie-title">Troy</h3>
        <img src={MoviePoster} alt="Movie Poster" className="movie-poster" />
      </div>
      <div className="ticket-details">
        <h4 className="ticket-heading">Order Summary</h4>
        <ul className="ticket-list">
          <li className="ticket-item">
            <span className="ticket-quantity">2</span> Adult x <span className="ticket-price">$26.00</span>
          </li>
          <li className="ticket-item">
            <span className="ticket-quantity"></span> Tax/Fee <span className="ticket-price">$4.00</span>
          </li>
        </ul>
      </div>
      <div className="total">
        Total: <span className="total-price">$30.00</span>
      </div>
      <div className='button-container'>
      <button className='cancel-button' onClick={cancelButtonHandler}>Cancel</button>
      <button className='confirm-button' onClick={confirmButtonHandler}>Confirm</button>
      <button className='update-button' onClick={updateButtonHandler}>Update</button>
      </div>
    </div>
  );
};

export default OrderSummary;
