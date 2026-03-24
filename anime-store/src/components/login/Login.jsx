import React, { useState } from "react";
import { FiX, FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import "./style.css";

const Login = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="login-overlay active" onClick={onClose}>
      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        <button className="login-close-btn" onClick={onClose}>
          <FiX size={24} />
        </button>

        <div className="login-header">
          <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
          <p>{isSignUp ? "Join the Indian Anime Store today." : "Log in to continue to your account."}</p>
        </div>

        <div className="social-login">
          <button 
            type="button" 
            className="google-btn"
            onClick={() => console.log("Google SSO button clicked")}
          >
            <FcGoogle size={22} className="google-icon" />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="divider">
          <span>or continue with email</span>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {isSignUp && (
            <div className="input-group">
              <FiUser className="input-icon" />
              <input type="text" placeholder="Full Name" required />
            </div>
          )}

          <div className="input-group">
            <FiMail className="input-icon" />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <FiLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>

          {!isSignUp && (
            <div className="forgot-password">
              <span>Forgot Password?</span>
            </div>
          )}

          <button type="submit" className="login-submit-btn">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <span
              className="toggle-auth"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;