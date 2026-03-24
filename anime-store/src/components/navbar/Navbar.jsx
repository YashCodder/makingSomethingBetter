import React, { useState } from "react";
import { FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.css";
import Login from "../login/Login";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, setUser } = useAuth();

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        {/* LEFT - Toggle Button */}
        <div className="nav-left">
          <div className="menu-btn" onClick={() => setMenuOpen(true)}>
            <FiMenu size={24} />
          </div>
        </div>

        {/* CENTER - Logo */}
        <div className="nav-center">
          <span className="logo-text">INDIAN ANIME STORE</span>
        </div>

        {/* RIGHT - Icons */}
        <div className="nav-right">
          <div className="icon-wrapper">
            <FiShoppingBag size={22} />
            <span className="cart-count">2</span>
          </div>

          <div className="icon-wrapper" style={{ position: "relative" }}>
            <div onClick={() => user ? setUserMenuOpen(!userMenuOpen) : setLoginOpen(true)}>
              {user ? (
                <img src={user.picture} alt="Avatar" style={{ width: 26, height: 26, borderRadius: "50%", cursor: "pointer", objectFit: "cover" }} />
              ) : (
                <FiUser size={22} style={{ cursor: "pointer" }} />
              )}
            </div>

            {/* Dropdown Menu */}
            {userMenuOpen && user && (
              <div style={{
                position: "absolute", top: "40px", right: "0", background: "#fff", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)", borderRadius: "12px", padding: "10px", 
                display: "flex", flexDirection: "column", gap: "5px", zIndex: 1000, minWidth: "150px"
              }}>
                <Link 
                  to="/profile" 
                  style={{ textDecoration: "none", color: "#111", padding: "10px 14px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", display: "block" }} 
                  onClick={() => setUserMenuOpen(false)}
                >
                  My Profile
                </Link>
                <div 
                  style={{ color: "#e11d48", padding: "10px 14px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "14px" }}
                  onClick={() => setUser(null)}
                >
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= SIDE MENU ================= */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        <div className="side-menu-header">
          <h3>CATEGORIES</h3>
          <FiX
            size={22}
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="side-menu-content">
          <span>NEW ARRIVALS</span>
          <span>BESTSELLERS</span>
          <span>SHOP ALL</span>
          <span>SHIRTS</span>
          <span>T-SHIRTS | POLO</span>
          <span>JEANS</span>
          <span>TROUSERS</span>
          <span>LINEN EDIT</span>
          <span>FOOTWEAR</span>
          <span>CARGO PANTS</span>
          <span>OVERSHIRTS</span>
          <span>JOGGERS</span>
          <span>SHORTS</span>
          <span>PERFUMES</span>
          <span>ACCESSORIES</span>
        </div>

      </div>

      {/* ================= LOGIN MODAL ================= */}
      <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Navbar;