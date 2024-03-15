import React from "react";
import { useState } from "react";
import '../style/ForgotPassword.css'

const ForgotPassword = () => {

    const [enteredEmail, setEnteredEmail] = useState('');

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