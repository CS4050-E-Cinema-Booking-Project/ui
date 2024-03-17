import React, {useEffect, useState} from "react";
import { Link, useLocation} from "react-router-dom";
import "../style/EditProfile.css";

const EditProfile = () => {

  const location = useLocation();
  const user = location.state;

  const updateUser = async () => {
      await fetch(`http://localhost:8000/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode
        })
      })
    }

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  const [streetAddress, setStreetAddress] = useState(user.streetAddress);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [zipCode, setZipCode] = useState(user.zipCode);

  return (
    <div>
      <div className="settings-box">
        <div className="card-body">
          <div class="card-title">Account Details</div>
          <form>
            <div>
              <div className="name-card">
                <label className="name-title">First Name</label>
                <input id='first-name' className="name-form" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">Last Name</label>
                <input id='last-name' className="name-form" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="settings-card">
                <label className="settings-title">Phone Number</label>
                <input id='phone-number' className="settings-form" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

              </div>
            </div>
            <div className="settings-card">
              <label className="settings-title">Email Address</label>
              <input id='email' className="settings-form" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </form>
        </div>
        <div className="card-body">
          <div class="card-title">Home Address</div>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Street Address</label>
                <input id='streetAddress' className="settings-form" type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">City</label>
                <input id='city' className="name-form" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">State</label>
                <input id='state' className="name-form" type="text" value={state} onChange={(e) => setState(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">Postal/Zip Code</label>
                <input id='zipCode' className="name-form" type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
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
          <Link to="/user" className="leave-button">Cancel</Link>
          <button class="edit-button" type="button" onClick={updateUser}>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;