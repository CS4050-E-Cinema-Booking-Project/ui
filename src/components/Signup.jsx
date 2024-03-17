import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/Signup.css'

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

    const submitHandler = async (event) => {

        var signupComplete = true;

        event.preventDefault();
        document.getElementById('firstNameP').style.display = 'none';
        document.getElementById('lastNameP').style.display = 'none';
        document.getElementById('phoneNumberP').style.display = 'none';
        document.getElementById('emailP').style.display = 'none';
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
            promotionOptIn: promotionOptIn,
            userCode: ''
        };
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

        if (signupComplete) {
            const response = await fetch(`http://localhost:8000/users/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(enteredSignupData)
              })
      
              const data = await response.json();
              
              navigate('/signup-confirm', { state: { id: 0, user: data } });
        }

        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredPhoneNumber('');
        setEnteredEmail('');
        setEnteredPassword('');
        setConfirmPassword('');

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
          <button className="signup-form-button" type="submit">Sign Up</button>
        </form>
      </div>
    )
}
export default Signup;
