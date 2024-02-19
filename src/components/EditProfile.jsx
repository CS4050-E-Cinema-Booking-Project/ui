import React from "react";
import "../style/EditProfile.css";

const EditProfile = () => {
  return (
    <div>
      <div className="card-body">
        <div class="card-title">Account Details</div>
        <form>
          <div>
            <div className="name-card">
              <label className="name-title">First name</label>
              <input className="name-form" type="text" placeholder="Enter your first name" />
            </div>
            <div className="name-card">
              <label className="name-title">Last name</label>
              <input className="name-form" type="text" placeholder="Enter your last name" />
            </div>
          </div>
          <div>
            <div>
              <label>Phone number</label>
              <input className="settings-form" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
          <div>
            <label>Email address</label>
            <input className="settings-form" type="email" placeholder="Enter your email address" />
          </div>
        </form>
      </div>
      <div className="card-body">
        <div class="card-title">Home Address</div>
        <form>
          <div>
            <div>
              <label>Address</label>
              <input className="settings-form" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
          <div>
            <div className="name-card">
              <label className="name-title">City</label>
              <input className="name-form" type="text" placeholder="Enter your city" />
            </div>
            <div className="name-card">
              <label className="name-title">State</label>
              <input className="name-form" type="text" placeholder="Enter your state" />
            </div>
          </div>
          <div>
            <div className="name-card">
              <label className="name-title">Zip</label>
              <input className="name-form" type="text" placeholder="Enter your zip code" />
            </div>
          </div>
        </form>
      </div>
      <div className="card-body">
        <div class="card-title">Payment Information</div>
        <form>
          <div>
            <div className="name-card">
              <label className="name-title">First name</label>
              <input className="name-form" type="text" placeholder="Enter your first name" />
            </div>
            <div className="name-card">
              <label className="name-title">Last name</label>
              <input className="name-form" type="text" placeholder="Enter your last name" />
            </div>
          </div>
          <div>
            <div>
              <label>Phone number</label>
              <input className="settings-form" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
          <div>
            <label>Email address</label>
            <input className="settings-form" type="email" placeholder="Enter your email address" />
          </div>
        </form>
        <button class="save-button" type="button">Save changes</button>
      </div>
    </div>
  );
};

export default EditProfile;