import React, { useState } from "react";
import '../style/LoginForm.css'


const LoginForm = () => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredLoginData = {
            email: enteredEmail,
            password: enteredPassword
        };
    }
    
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    return(
        <div className="login-form">
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
          <label>Email</label>
           <input
            id="email"
            type="text"
            value = {enteredEmail}
            onChange = {emailChangeHandler}
          />
          <label>Password</label>
           <input
            id="password"
            type="password"
            value = {enteredPassword}
            onChange = {passwordChangeHandler}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
}
export default LoginForm;
