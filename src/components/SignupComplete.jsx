import React from "react";
import { Link } from "react-router-dom";
import '../style/SignupComplete.css'

const SignupComplete = () => {
    return (
        <div className="completion-box">
            <h1 className="completion-title">Signup Complete!</h1>
            <h3 className="completion-text">
                Welcome to our wonderful site
                <br></br>
                Feel free to start browsing and booking movies now
            </h3>
            <Link className="signup-completion-link" to={"/"}>Return Home</Link>
        </div>
    );
};

export default SignupComplete;