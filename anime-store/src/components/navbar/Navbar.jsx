import React, { useState } from "react";
import { FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

          <div className="icon-wrapper">
            <FiUser size={22} />
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
    </>
  );
};

export default Navbar;