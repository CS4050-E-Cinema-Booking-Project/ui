import React, { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import '../style/SignupConfirm.css'
import VerificationInput from "react-verification-input";


const SignupConfirm = (event) => {

    const { state } = useLocation();
    const { user } = state
    const navigate = useNavigate();
    const userCode = user.userCode
    const [error, setError] = useState("");
    const [value, setValue] = useState("")
    const valueHandler = (event) => {
        setValue(event.target.value);
    }

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

    return (
        <div className="verify-box">
            <h1 className={"verify-title"}>Enter the 5-digit code sent to your email</h1>

            <input id="inputCode" onChange={valueHandler}></input>
            <p className="error-message">{error}</p>
            <div className="verify-link-box">
                <form onSubmit={submitHandler}>
                    <button className="verify-link">Verify</button>
                </form>;
            </div>
            <h3>Didn't get an email?</h3>
            <button className="resend">Resend</button>
        </div>
    );
};

export default SignupConfirm;