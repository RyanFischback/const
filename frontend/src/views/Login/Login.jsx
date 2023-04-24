import Navigation from "../Navigation/Navigation"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Add your login logic here
      // For example, you can make a request to a server to verify the user's credentials
      // If the login is successful, you can redirect the user to another page using the history object
      navigate("/");
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    return (
    <>
    <Navigation />
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
    </>
    );
};

export default Login;