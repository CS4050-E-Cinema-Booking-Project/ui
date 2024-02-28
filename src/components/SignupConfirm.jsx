import React from "react";
import { Link } from "react-router-dom";
import '../style/SignupConfirm.css'
import VerificationInput from "react-verification-input";

const SignupConfirm = () => {
    return (
        <div className="verify-box">
            <h1 className={"verify-title"}>Enter the 5-digit code sent to your email</h1>
            <VerificationInput
                length={5}
                placeholder=""
            />
            <div className="verify-link-box">
                <Link className="verify-link" to={"/signup-complete"}>Verify</Link>
            </div>
            <h3>Didn't get an email?</h3>
            <button className="resend">Resend</button>
        </div>
    );
};

export default SignupConfirm;