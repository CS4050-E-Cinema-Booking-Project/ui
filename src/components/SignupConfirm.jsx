import React, { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import '../style/SignupConfirm.css'
import VerificationInput from "react-verification-input";


const SignupConfirm = () => {

    const { state } = useLocation();
    const { user } = state
    const navigate = useNavigate();
    const userCode = user.userCode
    const [error, setError] = useState("");
    const [resentEmail, setResentEmail] = useState("");
    const [value, setValue] = useState("");
    const valueHandler = (event) => {
        setValue(event.target.value);
    };

    const submitHandler = async (e) => {

        e.preventDefault();
        try {
            if(value == userCode) {
                navigate("/signup-complete");
            } else {
                setError("Invalid Verification Code"); 
            }
        } catch (error) {
            setError("An error occurred.");
        }

    }

    const submitResendHandler = function(){
        try {
            fetch(`http://localhost:8000/users/resend-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
            setResentEmail("Email Resent!")
        } catch {
            setResentEmail("Invalid Verification Code"); 
        }
        
    }


    return (
        <div className="verify-box">
            <h1 className={"verify-title"}>Enter the 5-digit code sent to your email</h1>

            <input id="inputCode" onChange={valueHandler}></input>
            <p className="error-message">{error}</p>
            <div className="verify-link-box">
                <button onClick= {submitHandler} type="submit" className="verify-link">Verify</button>
            </div>
            <h3>Didn't get an email?</h3>
            <button onClick= {submitResendHandler} type="submit" className="resend">Resend</button>
            <p className="error-message">{resentEmail}</p>
        </div>
    );
};

export default SignupConfirm;