import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
    <>
        <header id="navbar-container">
            <div id="navbar-left">
                <Link to="/" id="nav-logo">
                    <img src="./logo.png" alt="Home" />
                </Link>
            </div>
            <ul id="navbar-right">
                <li>
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li>
                    <Link to="/project" className="nav-link">Projects</Link>
                </li>
                {/* <li>
                    <Link to="/login" className="nav-link">Profile</Link>
                </li> */}
            </ul>
        </header>
    </>
)};

export default Navigation;