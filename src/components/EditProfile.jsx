import React from "react";
import { Link } from "react-router-dom";
import "../style/EditProfile.css";

const EditProfile = () => {
  return (
    <div>
      <div className="settings-box">
        <div className="card-body">
          <div class="card-title">Account Details</div>
          <form>
            <div>
              <div className="name-card">
                <label className="name-title">First Name</label>
                <input className="name-form" type="text"/>
              </div>
              <div className="name-card">
                <label className="name-title">Last Name</label>
                <input className="name-form" type="text"/>
              </div>
            </div>
            <div>
              <div className="settings-card">
                <label className="settings-title">Phone Number</label>
                <input className="settings-form" type="tel" placeholder="(###)-###-####" />
              </div>
            </div>
            <div className="settings-card">
              <label className="settings-title">Email Address</label>
              <input className="settings-form" type="email"/>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div class="card-title">Home Address</div>
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
          <Link to="/user" className="cancel-button">Cancel</Link>
          <button class="edit-button" type="button">Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;