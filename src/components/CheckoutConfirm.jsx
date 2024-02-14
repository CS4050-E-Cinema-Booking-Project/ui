import React from "react";
import '../style/CheckoutConfirm.css'
import { Link } from "react-router-dom";

const CheckoutConfirm = () => {
  return (
    <div>
        <h1 className="check-confirm-title">Enjoy the show!</h1>
        <h3>A confirmation and order summary have been sent to your email.</h3>
        <h3 className="order-detail-title">Order Summary:</h3>
        <div className="order-summary">
            <h3>Ticket Details</h3>
            <h3>Ticket Price</h3>
            <h3>Order Total</h3>
        </div>
        <Link to="/" className="return-home">
                Continue Browsing
        </Link>
    </div>
  );
};

export default CheckoutConfirm;