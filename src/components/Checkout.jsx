import React from "react";
import { Link } from "react-router-dom";
import "../style/Checkout.css";

const Checkout = () => {
  return (
    <div>
      <div className="settings-box">
        <div className="card-body">
          <div class="card-title">Billing Address</div>
          <button className="saved-cards-button" type="button">Saved Cards</button>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Street Address</label>
                <input className="settings-form" type="text"/>
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">City</label>
                <input className="name-form" type="text"/>
              </div>
              <div className="name-card">
                <label className="name-title">State</label>
                <input className="name-form" type="text"/>
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">Postal/Zip Code</label>
                <input className="name-form" type="text"/>
              </div>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div class="card-title">Payment Information</div>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Card Number</label>
                <input className="settings-form" type="tel"/>
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">CVC</label>
                <input className="name-form" type="text"/>
              </div>
              <div className="name-card">
                <label className="name-title">Card Expiration</label>
                <input className="name-form" type="text" placeholder="MM/YY" />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">First Name</label>
                <input className="name-form" type="text"/>
              </div>
              <div className="name-card">
                <label className="name-title">Last name</label>
                <input className="name-form" type="text"/>
              </div>
            </div>
          </form>
          <Link to="/" className="cancel-button">Cancel</Link>
          <button class="confirm-button" type="button">Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;