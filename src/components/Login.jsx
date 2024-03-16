import React, { useState } from "react";
import '../style/Login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({setAuthenticated}) => {

  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    const {name, value} = input;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/users/";
      const { data: users } = await axios.get(url); // Fetch all users from the server
      const user = users.find(user => user.email === data.email && user.password === data.password);
      if(user) {
        localStorage.setItem("token", user.id);
        setAuthenticated(true);
        navigate("/");
      } else {
        setError("Invalid email or password"); 
      }
    } catch (error) {
      setError("An error occurred while logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1 className="login-form-title">Welcome Back!</h1>
          <label className="login-input-title">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            value={data.email}
            required
          />
          <label className="login-input-title">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <Link to="/forgot-password" className="forgot-password-button">Forgot Password?</Link>
          <button className="login-form-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
export default Login;