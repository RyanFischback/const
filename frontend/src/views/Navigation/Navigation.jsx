import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from './logo.png';

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
  // function to handle logging out
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    // function to handle logging in
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    return (
    <>
        <header id="navbar-container">
            <div id="navbar-left">
                <Link to="/" id="nav-logo">
                    <img src={logo} alt="Home" />
                </Link>
            </div>
            <ul id="navbar-right">
                {!isLoggedIn && <li><button className="button-link nav-link" onClick={handleLogin}>Login</button></li>}
                <li>
                    <Link to="/project" className="nav-link">Projects</Link>
                </li>
                {isLoggedIn && <li><Link to="/profile" className="nav-link">Profile</Link></li>}
                {isLoggedIn && <li><button className="button-link nav-link" onClick={handleLogout}>Logout</button></li>}
            </ul>
        </header>
    </>
)};

export default Navigation;