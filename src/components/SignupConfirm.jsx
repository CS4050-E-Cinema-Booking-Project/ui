import React, { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import '../style/SignupConfirm.css'
import VerificationInput from "react-verification-input";
import axios from "axios";


const SignupConfirm = () => {

    const {state} = useLocation();
    const enteredInfo = state.user
    const cardInfo = state.card
    const userCode = state.userInfo.userCode
    const userID = state.userInfo.id
    const navigate = useNavigate();
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
                const response = await fetch(`http://localhost:8000/users/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(enteredInfo)
                })
                const data = await response.json();    

                cardInfo.userID = data.id
                const responseCard = await fetch(`http://localhost:8000/paymentCards/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(cardInfo)
                })

                const dataCard = await responseCard.json();    
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
                body: JSON.stringify(state.userInfo)
            })
            setResentEmail("Email Resent!")
        } catch {
             setResentEmail("Error sending email."); 
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