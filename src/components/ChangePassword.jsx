import React from "react";
import { useState } from "react";
import { useNavigate,useParams,useLocation } from "react-router-dom";
import '../style/ChangePassword.css'
import axios from "axios";

const ChangePassword = () => {

    const navigate = useNavigate();

    const {state} = useLocation();
    const user = state.user;
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newConfirmPassword, setNewConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const submitHandler = async (event) => {
        event.preventDefault();
        if (newPassword !== newConfirmPassword) {
            setError("Passwords do not match.");
        } else if (user.password != oldPassword){
            setError("Incorrect Password.");
        } else {
            const url = `http://localhost:8000/users/${user.id}`;
            user.password = newPassword;
            user.confirmPassword = newConfirmPassword
            await axios.put(url, user)
            setError("Password Reset!");
            navigate("/");
        }
    }

    return (
        <div className="reset-password-form">
            <form onSubmit={submitHandler}>
                <label className="forgot-password-title">Change Password</label>
                <label className="forgot-password-email-title">Old Password</label>
                <input
                    id="old-password"
                    name="old-password"
                    type="password"
                    placeholder="Enter old password..."
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <label className="forgot-password-email-title">New Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter new password..."
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <label className="forgot-password-email-title">Confirm New Password</label>
                <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    placeholder="Confirm new password..."
                    value={newConfirmPassword}
                    onChange={(e) => setNewConfirmPassword(e.target.value)}
                />
                {error && <span className="error-message">{error}</span>}
                <button className="login-form-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ChangePassword;