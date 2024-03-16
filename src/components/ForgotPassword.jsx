import React from "react";
import { useState } from "react";
import '../style/ForgotPassword.css'
import {isEmail} from "validator";

const ForgotPassword = () => {

    const [enteredEmail, setEnteredEmail] = useState('');

    const required = (value) => {
        if (!value) {
            <span style={{display: 'block'}} className="form-inlineMessage error">
                This field is required!
            </span>
        };
    }

    const vemail = (value) => {
        if (!isEmail) {
            return (
                <span style={{display: 'block'}} className="form-inlineMessage error">Please use a valid email address, such as user@example.com.</span>
            );    
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredLoginData = {
            email: enteredEmail,
        };
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    return (
        <div className="forgot-password-form">
            <form onSubmit={submitHandler}>
                <label className="forgot-password-title">Forgot Password?</label>
                <label className="forgot-password-email-title">Email</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Enter email..."
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                />
                <button className="login-form-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;