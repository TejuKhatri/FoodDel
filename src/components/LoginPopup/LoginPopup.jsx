import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin, showLogin }) => {
  const [currState, setCurrState] = useState("Sign up");

  // Prevent background scroll when popup is visible
  useEffect(() => {
    document.body.style.overflow = showLogin ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLogin]);

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input type='text' placeholder='Your Name' required />
          )}
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button>{currState === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here.</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here.</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
