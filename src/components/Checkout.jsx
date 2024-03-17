import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Checkout.css";

const Checkout = () => {

  const [enteredPromoCode, setEnteredPromoCode] = useState('');

  const promoCodeChangeHandler = (event) => {
    setEnteredPromoCode(event.target.value);
  }

  const promoCodeSubmitHandler = (event) => {
    if (event.key == 'Enter') {
      console.log(enteredPromoCode);
      // promo code handling here
    }
  }

  return (
    <div>
      <div className="settings-box">
        <div className="card-body">
          <div className="card-title">Billing Address</div>
          <button className="saved-cards-button" type="button">Saved Cards</button>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Street Address</label>
                <input className="settings-form" type="text" />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">City</label>
                <input className="name-form" type="text" />
              </div>
              <div className="name-card">
                <label className="name-title">State</label>
                <input className="name-form" type="text" />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">Postal/Zip Code</label>
                <input className="name-form" type="text" />
              </div>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div className="card-title">Payment Information</div>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Card Number</label>
                <input className="settings-form" type="tel" />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">CVC</label>
                <input className="name-form" type="text" />
              </div>
              <div className="name-card">
                <label className="name-title">Card Expiration</label>
                <input className="name-form" type="text" placeholder="MM/YY" />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">First Name</label>
                <input className="name-form" type="text" />
              </div>
              <div className="name-card">
                <label className="name-title">Last name</label>
                <input className="name-form" type="text" />
              </div>
            </div>
            <div className="checkout-button-box">
              <Link to="/" className="cancel-button">Cancel</Link>
              <Link to="/checkout-confirm" className="checkout-button">Confirm Purchase</Link>
            </div>
          </form>
        </div>
      </div>

      <div className="order-summary-box">
        <div className="card-body">
          <div className="card-title">Order Summary</div>
          <div className="order-total">
            <label>Total:</label>
            <span>$30.00</span>
          </div>
          <div className="promo-code">
            <label>Promo Code:</label>
            <input onKeyPress={promoCodeSubmitHandler} onChange={promoCodeChangeHandler} className="promo-code-input" type="text" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Checkout;
