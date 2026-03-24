import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { FiArrowLeft, FiLogOut, FiSettings, FiShoppingBag } from "react-icons/fi";
import "./style.css"; // We'll create a style file for profile

const Profile = () => {
  const { user, loading, setUser } = useAuth();

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="profile-container">
      <div className="profile-nav">
        <Link to="/" className="back-btn">
          <FiArrowLeft size={24} />
          <span>Back to Store</span>
        </Link>
      </div>

      <div className="profile-header-card">
        <div className="profile-avatar-container">
          <img src={user.picture} alt={user.name} className="profile-avatar-large" />
          <div className="profile-status-dot"></div>
        </div>
        
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>

        <div className="profile-stats">
          <div className="stat-box">
            <h2>0</h2>
            <span>Orders</span>
          </div>
          <div className="stat-box">
            <h2>0</h2>
            <span>Wishlist</span>
          </div>
          <div className="stat-box">
            <h2>0</h2>
            <span>Reviews</span>
          </div>
        </div>
      </div>

      <div className="profile-actions-grid">
        <button className="action-card">
          <FiShoppingBag size={24} className="action-icon" />
          <div className="action-text">
            <h3>My Orders</h3>
            <p>View your order history</p>
          </div>
        </button>

        <button className="action-card">
          <FiSettings size={24} className="action-icon" />
          <div className="action-text">
            <h3>Settings</h3>
            <p>Manage account preferences</p>
          </div>
        </button>
      </div>

      <button className="profile-logout-btn" onClick={handleLogout}>
        <FiLogOut size={20} />
        <span>Log Out Completely</span>
      </button>

    </div>
  );
};

export default Profile;
