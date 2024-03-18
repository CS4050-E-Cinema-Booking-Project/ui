import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import "../style/EditProfile.css";
import axios from "axios";



const EditProfile = () => {

  const {state} = useLocation();
  const user = state.userData;
  const paymentInfo = state.paymentData;

  const newUser = user;
  const newCard = paymentInfo;
  const navigate = useNavigate();


  const updateUser = async (event) => {

        newUser.firstName = firstName
        newUser.lastName = lastName
        newUser.phoneNumber = phoneNumber
        newUser.email = email
        newUser.streetAddress = streetAddress
        newUser.city = city
        newUser.state = state_add
        newUser.zipCode = zipCode
        newUser.promotionOptIn = promotionOptIn
        console.log(promotionOptIn)

        newCard.cardNumber = cardNumber
        newCard.expirationDate = cardExpiration
        newCard.cvc = cvc
        newCard.firstName = cardFirstName
        newCard.lastName = cardLastName
        newCard.streetAddress = paymentStreetAddress
        newCard.city = paymentCity
        newCard.state = paymentState
        newCard.zipCode = paymentZipCode

      await fetch(`http://localhost:8000/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      })

      await fetch(`http://localhost:8000/paymentCards/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard)
      })
      navigate('/user')

      
    }
  
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  const [promotionOptIn, setPromotionOptIn] = useState(user.promotionOptIn);

  const [streetAddress, setStreetAddress] = useState(user.streetAddress);
  const [city, setCity] = useState(user.city);
  const [state_add, setState] = useState(user.state);
  const [zipCode, setZipCode] = useState(user.zipCode);

  const [cardNumber, setCardNumber] = useState(paymentInfo.cardNumber);
  const [cardExpiration, setExpiration] = useState(paymentInfo.expirationDate);
  const [cvc, setCVC] = useState(paymentInfo.cvc);
  const [cardFirstName, setCardFirstName] = useState(paymentInfo.firstName);
  const [cardLastName, setCardLastName] = useState(paymentInfo.lastName);

  const [paymentStreetAddress, setPaymentStreetAddress] = useState(paymentInfo.streetAddress);
  const [paymentCity, setPaymentCity] = useState(paymentInfo.city);
  const [paymentState, setPaymentState] = useState(paymentInfo.state);
  const [paymentZipCode, setPaymentZipCode] = useState(paymentInfo.zipCode);
  


  return (
    <div>
      <div className="settings-box">
        <div className="card-body">
          <div className="card-title">Account Details</div>
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
              <label className="settings-title">Email Address (not editable)</label>
              <input id='email' className="settings-form" type="text" value={email} />
            </div>
            <label>Opt-in to email promotions and deals:</label>
            <input
              id="promotion-opt-in"
              type="checkbox"
              checked = {promotionOptIn}
              onClick={(e) => setPromotionOptIn(e.target.checked)}
            />
          </form>
        </div>
        <div className="card-body">
          <div className="card-title">Home Address</div>
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
                <input id='state' className="name-form" type="text" value={state_add} onChange={(e) => setState(e.target.value)} />
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
          <div className="card-title">Payment Information</div>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Card Number</label>
                <input id='card-number' className="settings-form" type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">CVC</label>
                <input id='card-cvc' className="name-form" type="text" value={cvc} onChange={(e) => setCVC(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">Card Expiration</label>
                <input placeholder="MM/YY" id='card-expiration' className="name-form" type="text" value={cardExpiration} onChange={(e) => setExpiration(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">First Name</label>
                <input id='card-first-name' className="name-form" type="text" value={cardFirstName} onChange={(e) => setCardFirstName(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">Last name</label>
                <input id='card-last-name' className="name-form" type="text" value={cardLastName} onChange={(e) => setCardLastName(e.target.value)} />
              </div>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div className="card-title">Billing Address</div>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Street Address</label>
                <input id='card-street-address' className="settings-form" type="text" value={paymentStreetAddress} onChange={(e) => setPaymentStreetAddress(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">City</label>
                <input id='card-city' className="name-form" type="text" value={paymentCity} onChange={(e) => setPaymentCity(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">State</label>
                <input id='card-expiration' className="name-form" type="text" value={paymentState} onChange={(e) => setPaymentState(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">Postal/Zip Code</label>
                <input id='card-first-name' className="name-form" type="text" value={paymentZipCode} onChange={(e) => setPaymentZipCode(e.target.value)} />
              </div>
            </div>
          </form>
          <Link to="/user" className="leave-button">Cancel</Link>
          <button className="edit-button" type="button" onClick={updateUser}>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;