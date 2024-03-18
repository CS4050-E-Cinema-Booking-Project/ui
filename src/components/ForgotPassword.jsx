import React from "react";
import { useState } from "react";
import '../style/ForgotPassword.css'
import { isEmail } from "validator";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {

    const [data, setData] = useState({ email: "" });
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();



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

    function ResetPassword({ user }) {

        // const resetPassword = async () => {

        //     await fetch(`http://localhost:8000/users/reset-password/`, {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(user),
        //     });
        // }
        // resetPassword()
        console.log({user})
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const isEmailValid = required(enteredEmail) && vemail(enteredEmail);

        try {
            const url = "http://localhost:8000/users/";
            const { data: users } = await axios.get(url); // Fetch all users from the server
            const user = users.find(user => user.email === enteredEmail);
            console.log(user)
            if (user) {
                await fetch(`http://localhost:8000/users/reset-password/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                });
                ResetPassword(user)
                setSubmitting(true);
                setError("Email sent");
            } else {
                setError("Email not found");
            }
        } catch (error) {
            setError("An error occurred while finding account information");
        }
    };

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
                    disabled={submitting}
                />
                {emailError && (
                    <span style={{ display: "block" }} className="forgot-password-error">
                        {emailError}
                    </span>
                )}
                <button className="login-form-button" type="submit" disabled={submitting}>
                    Submit
                </button>
                <p className="error-message">{error}</p>
            </form>
        </div>
    );
};

export default ForgotPassword;