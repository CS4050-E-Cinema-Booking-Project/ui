import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import '../style/Signup.css'
import axios from "axios";


const Signup = () => {

    const navigate = useNavigate();

    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setConfirmPassword] = useState('');
    const [promotionOptIn, setPromotionOptIn] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cardFirstName, setCardFirstName] = useState('');
    const [cardLastName, setCardLastName] = useState('');

    const [paymentStreetAddress, setPaymentStreetAddress] = useState('');
    const [paymentCity, setPaymentCity] = useState('');
    const [paymentState, setPaymentState] = useState('');
    const [paymentZipCode, setPaymentZipCode] = useState('');

    const submitHandler = async (event) => {

        var signupComplete = true;

        event.preventDefault();
        document.getElementById('firstNameP').style.display = 'none';
        document.getElementById('lastNameP').style.display = 'none';
        document.getElementById('phoneNumberP').style.display = 'none';
        document.getElementById('emailP').style.display = 'none';
        document.getElementById('emailExists').style.display = 'none';
        document.getElementById('passwordP').style.display = 'none';
        document.getElementById('confirmPasswordP').style.display = 'none';
        document.getElementById('passwordNoMatch').style.display = 'none';

        const enteredSignupData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            phoneNumber: enteredPhoneNumber,
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            streetAddress: streetAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            promotionOptIn: promotionOptIn,
            userStatus: 'active',
            userType: 'customer',
            userCode: ''
        };

        const enteredPaymentData = {
            userID: 1,
            cardNumber: cardNumber,
            expirationDate: cardExpiration,
            cvc: cvc,
            firstName: cardFirstName,
            lastName: cardLastName,
            
            streetAddress: paymentStreetAddress,
            city: paymentCity,
            state: paymentState,
            zipCode: paymentZipCode
        }
        if (enteredFirstName === undefined || enteredFirstName.length < 1) {
            document.getElementById('firstNameP').style.display = 'block';
            signupComplete = false;
        }
        if (enteredLastName === undefined || enteredLastName.length < 1) {
            document.getElementById('lastNameP').style.display = 'block';
            signupComplete = false;
        }
        if (enteredPhoneNumber === undefined || enteredPhoneNumber.length < 1) {
            document.getElementById('phoneNumberP').style.display = 'block';
            signupComplete = false;
        }
        if (enteredEmail === undefined || enteredEmail.length < 1) {
            document.getElementById('emailP').style.display = 'block';
            signupComplete = false;
        }
        if (enteredPassword === undefined || enteredPassword.length < 1) {
            document.getElementById('passwordP').style.display = 'block';
            signupComplete = false;
        }
        if (enteredConfirmPassword === undefined || enteredConfirmPassword.length < 1) {
            document.getElementById('confirmPasswordP').style.display = 'block';
            signupComplete = false;
        }
        if (enteredPassword != enteredConfirmPassword) {
            document.getElementById('passwordNoMatch').style.display = 'block';
            signupComplete = false;
        }
        
        const url = "http://localhost:8000/users/";
        const { data: users } = await axios.get(url); // Fetch all users from the server
        const user = users.find(user => user.email === enteredEmail);
        if(user) {
            document.getElementById('emailExists').style.display = 'block';
        } else {
            const response = await fetch(`http://localhost:8000/users/send-confirmation-email/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(enteredSignupData)
            })

            const userInfo = await response.json(); 
            console.log(userInfo)

            navigate('/signup-confirm', { state: { id: 0, user: enteredSignupData, card: enteredPaymentData, userInfo: userInfo} });
            setEnteredFirstName('');
            setEnteredLastName('');
            setEnteredPhoneNumber('');
            setEnteredEmail('');
            setEnteredPassword('');
            setConfirmPassword('');
        }
        
        
    }

    const firstNameChangeHandler = (event) => {
        setEnteredFirstName(event.target.value);
    }

    const lastNameChangeHandler = (event) => {
        setEnteredLastName(event.target.value);
    }
    
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const phoneNumberChangeHandler = (event) => {
        setEnteredPhoneNumber(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const confirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value);
    }

    const promotionOptInChangeHandler = (event) => {
        setPromotionOptIn(event.target.checked);
    }

    return(
        <div className="signup-form">
        <form onSubmit={submitHandler}>
          <h1 className="signup-form-title">Create an Account</h1>
          <label>First Name</label>
          <p className="hiddenField" id="firstNameP">Field Required</p>
          <p></p>
           <input
            id="first-name"
            type="text"
            value = {enteredFirstName}
            onChange = {firstNameChangeHandler}
          />
          <label>Last Name</label>
          <p className="hiddenField" id="lastNameP">Field Required</p>
           <input
            id="last-name"
            type="text"
            value = {enteredLastName}
            onChange = {lastNameChangeHandler}
          />
          <label>Phone Number</label>
          <p className="hiddenField" id="phoneNumberP">Field Required</p>
           <input
            id="phone-number"
            type="tel"
            value = {enteredPhoneNumber}
            onChange = {phoneNumberChangeHandler}
          />
          <label>Email</label>
          <p className="hiddenField" id="emailP">Field Required</p>
          <p className="hiddenField" id="emailExists">An Account with this email already exists.</p>
           <input
            id="email"
            type="text"
            value = {enteredEmail}
            onChange = {emailChangeHandler}
          />
          <label>Password</label>
          <p className="hiddenField" id="passwordP">Field Required</p>
           <input
            id="password"
            type="password"
            value = {enteredPassword}
            onChange = {passwordChangeHandler}
          />
          <label>Confirm Password</label>
          <p className="hiddenField" id="confirmPasswordP">Field Required</p>
          <p className="hiddenField" id="passwordNoMatch">Passwords does not match</p>
           <input
            id="confirm-password"
            type="password"
            value = {enteredConfirmPassword}
            onChange = {confirmPasswordChangeHandler}
          />
          <label>Opt-in to email promotions and deals:</label>
          <input
            id="promotion-opt-in"
            type="checkbox"
            value = {promotionOptIn}
            onChange={promotionOptInChangeHandler}
          />
          <div className="card-body">
          <div class="card-title">(Optional) Home Address</div>
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
          <div className="card-body">
          <div class="card-title">(Optional) Payment Information</div>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Card Number</label>
                <input id='cardNumber' className="settings-form" type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">CVC</label>
                <input id='cvc' className="name-form" type="text" value={cvc} onChange={(e) => setCVC(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">Card Expiration</label>
                <input id='cardExpiration' placeholder="MM/YY" className="name-form" type="text" value={cardExpiration} onChange={(e) => setCardExpiration(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">First Name</label>
                <input id='cardFirstName' className="name-form" type="text" value={cardFirstName} onChange={(e) => setCardFirstName(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">Last name</label>
                <input id='cardLastName' className="name-form" type="text" value={cardLastName} onChange={(e) => setCardLastName(e.target.value)} />
              </div>
            </div>
          </form>
        </div>
        <div class="card-title">(Optional) Billing Address</div>
          <form>
            <div>
              <div className="settings-card">
                <label className="settings-title">Street Address</label>
                <input id='paymentStreetAddress' className="settings-form" type="text" value={paymentStreetAddress} onChange={(e) => setPaymentStreetAddress(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">City</label>
                <input id='paymentCity' className="name-form" type="text" value={paymentCity} onChange={(e) => setPaymentCity(e.target.value)} />
              </div>
              <div className="name-card">
                <label className="name-title">State</label>
                <input id='paymentState' className="name-form" type="text" value={paymentState} onChange={(e) => setPaymentState(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="name-card">
                <label className="name-title">Postal/Zip Code</label>
                <input id='paymentZipCode' className="name-form" type="text" value={paymentZipCode} onChange={(e) => setPaymentZipCode(e.target.value)} />
              </div>
            </div>
          </form>
        </div>
          
        




          <button className="signup-form-button" type="submit">Sign Up</button>
        </form>
      </div>
    )
}
export default Signup;
