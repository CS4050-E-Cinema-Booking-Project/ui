import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/ResetPassword.css'

const ResetPassword = () => {

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        navigate("/login");
    }

    return (
        <div className="reset-password-form">
            <form onSubmit={submitHandler}>
                <label className="forgot-password-title">Reset Password</label>
                <label className="forgot-password-email-title">New Password</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Enter new password..."
                />
                <label className="forgot-password-email-title">Confirm New Password</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Confirm new password..."
                />
                <button className="login-form-button" type="submit">Submit</button>
            </form>
        </div>

    );
};

export default ResetPassword;