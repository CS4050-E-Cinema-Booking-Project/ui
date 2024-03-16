import React from "react";
import { useState } from "react";
import '../style/ForgotPassword.css'
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const required = (value) => {
        if (!value) {
            setEmailError("This field is required!");
            return false;
        }
        return true;
    }

    const vemail = (value) => {
        if (!isEmail(value)) {
            setEmailError("Please use a valid email address, such as user@example.com.");
            return false;
        }
        return true;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const isEmailValid = required(enteredEmail) && vemail(enteredEmail);
        if (isEmailValid) {
            navigate("/reset-password");
        }
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setEmailError("");
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
                {emailError && (
                    <span style={{ display: "block" }} className="forgot-password-error">
                        {emailError}
                    </span>
                )}
                <button className="login-form-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;