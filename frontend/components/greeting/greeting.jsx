import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, pathname }) => {
    // debugger;
    const sessionLinks = () => {
        if (pathname === "/login") {
            return (<nav className="login-signup">
                <Link to="/signup">Sign up!</Link>
            </nav>)
        } else if (pathname === "/signup") {
            return (<nav className="login-signup">
                <Link to="/login">Login</Link>
            </nav>)
        } else {
            return (
            <nav className="login-signup">
                <Link to="/login">Login</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link>
            </nav>)
        };
    };
    const personalGreeting = () => (
        <hgroup className="header-group">
            {/* <h2 className="header-name">Hi, {currentUser.email}!</h2> */}
            <button className="logout-btn" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
