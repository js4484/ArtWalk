import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, pathname }) => {
    const sessionLinks = () => {
        if (pathname === "/login") {
            return (<nav className="login-signup">
                <Link to="/signup"><div className="nav-link">Sign up!</div></Link>
            </nav>)
        } else if (pathname === "/signup") {
            return (<nav className="login-signup">
                <Link to="/login"><div className="nav-link">Login</div></Link>
            </nav>)
        } else {
            return (
            <nav className="login-signup">
                    <Link to="/login"><div className="nav-link">Login</div></Link>
                    <Link to="/signup"><div className="nav-link">Sign up!</div></Link>
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
