import React from "react";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import '../style/ResetPassword.css'
import axios from "axios";


const ResetPassword = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({ password: "", confirm: "" });
    const [error, setError] = useState("");
    const {id} = useParams();

    const submitHandler = async (event) => {
        event.preventDefault();
        if (data.password !== data.confirm) {
            setError("Passwords do not match");
        } else {
            const url = "http://localhost:8000/users/";
            const { data: users } = await axios.get(url); // Fetch all users from the server
            const user = users.find(user => user.id == id);
            const url2 = `http://localhost:8000/users/${user.id}`;
            user.password = data.password;
            user.confirmPassword = data.confirm
            await axios.put(url2, user)

            console.log(user)
            setError("Password Reset!");
            navigate("/");
        }
    }

    const handleChange = ({ currentTarget: input }) => {
        const {name, value} = input;
        setData({ ...data, [name]: value });
        setError("");
      }

    return (
        <div className="reset-password-form">
            <form onSubmit={submitHandler}>
                <label className="forgot-password-title">Reset Password</label>
                <label className="forgot-password-email-title">New Password</label>
                <input
                    id="password"
                    name="password"
                    type="text"
                    placeholder="Enter new password..."
                    value={data.password}
                    onChange={handleChange}
                />
                <label className="forgot-password-email-title">Confirm New Password</label>
                <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    placeholder="Confirm new password..."
                    value={data.confirm}
                    onChange={handleChange}
                />
                {error && <span className="error-message">{error}</span>}
                <button className="login-form-button" type="submit">Submit</button>
            </form>
        </div>

    );
};

export default ResetPassword;