import React from "react";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import '../style/ChangePassword.css'
import axios from "axios";

const ChangePassword = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({ email: "" });
    const [error, setError] = useState("");
    const {id} = useParams();

    const submitHandler = async (event) => {
        event.preventDefault();
        const url = "http://localhost:8000/users/";
        const { data: users } = await axios.get(url); // Fetch all users from the server
        const user = users.find(user => user.email == data.email);
        
        if (user) {
            navigate("/change-password", {state: {user: user}});
            
        } else {
            setError("No account with this email is found.");

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
                <label className="forgot-password-title">Change Password</label>
                <label className="forgot-password-email-title">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter Email Address..."
                    value={data.email}
                    onChange={handleChange}
                />
                {error && <span className="error-message">{error}</span>}
                <button className="login-form-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ChangePassword;