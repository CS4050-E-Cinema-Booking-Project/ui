import React, { useState } from "react";
import '../style/SignupForm.css'


const SignupForm = () => {

    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (event) => {
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
            confirmPassword: enteredConfirmPassword
        };
        if (enteredFirstName === undefined || enteredFirstName.length < 1) {
            document.getElementById('firstNameP').style.display = 'block';
        }
        if (enteredLastName === undefined || enteredLastName.length < 1) {
            document.getElementById('lastNameP').style.display = 'block';
        }
        if (enteredPhoneNumber === undefined || enteredPhoneNumber.length < 1) {
            document.getElementById('phoneNumberP').style.display = 'block';
        }
        if (enteredEmail === undefined || enteredEmail.length < 1) {
            document.getElementById('emailP').style.display = 'block';
        }
        if (enteredPassword === undefined || enteredPassword.length < 1) {
            document.getElementById('passwordP').style.display = 'block';
        }
        if (enteredConfirmPassword === undefined || enteredConfirmPassword.length < 1) {
            document.getElementById('confirmPasswordP').style.display = 'block';
        }
        if (enteredPassword != enteredConfirmPassword) {
            document.getElementById('passwordNoMatch').style.display = 'block';
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

    return(
        <div className="signup-form">
        <form onSubmit={submitHandler}>
          <h1>Signup</h1>
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
          <button type="submit">Signup</button>
        </form>
      </div>
    )
}
export default SignupForm;
