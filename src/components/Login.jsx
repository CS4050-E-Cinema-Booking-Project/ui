import React, { useState, useEffect } from "react";
import '../style/Login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({setAuthenticated}) => {

  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
      navigate("/");
    }
  }, [navigate, setAuthenticated]);

  const handleChange = ({ currentTarget: input }) => {
    const {name, value} = input;
    setData({ ...data, [name]: value });
  }

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/users/";
      const { data: users } = await axios.get(url); // Fetch all users from the server
      const user = users.find(user => user.email === data.email && user.password === data.password);
      if(user) {
        if (rememberMe) {
          localStorage.setItem("token", user.id);
        }
        if (user.userType === "admin") {
          localStorage.setItem("isAdmin", "true");
        } else {
          localStorage.setItem("isAdmin", "false");
        }
        setAuthenticated(true);
        navigate("/");
        debugger;
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
          <label className="remember-box">
            <input
              type="checkbox"
              className="remember-checkbox"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <span>Remember me</span>
          </label>
          <p className="error-message">{error}</p>
          <Link to="/change-password" className="change-password-button">Change Password</Link>
          <Link to="/forgot-password" className="forgot-password-button">Forgot Password?</Link>
          <button className="login-form-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
export default Login;