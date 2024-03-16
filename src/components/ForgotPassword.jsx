import React from "react";
import { useState } from "react";
import '../style/ForgotPassword.css'
import { isEmail } from "validator";

const ForgotPassword = () => {

    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [submitting, setSubmitting] = useState(false);

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

    const submitHandler = async (event) => {
        event.preventDefault();
        const isEmailValid = required(enteredEmail) && vemail(enteredEmail);
        if (isEmailValid && !submitting) {
            setSubmitting(true); 
            try {
                const response = await fetch("", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: enteredEmail }),
                });
                if (response.ok) {
                    setEnteredEmail("");
                    setEmailError("");
                    alert("Reset link sent to your email.");
                } else {
                    alert("Failed to send reset link. Please try again later.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again later.");
            } finally {
                setSubmitting(false);
            }
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
                    disabled={submitting}g
                />
                {emailError && (
                    <span style={{ display: "block" }} className="forgot-password-error">
                        {emailError}
                    </span>
                )}
                <button className="login-form-button" type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;