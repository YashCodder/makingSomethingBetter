import React, { useEffect, useState } from "react";
import "../index.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 40);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHideNav(true); // hide when scrolling down
      } else {
        setHideNav(false); // show when scrolling up
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          hideNav ? "hide" : ""
        }`}
      >
        <div className="logo">
          <span className="logo-text">INDIAN ANIME STORE</span>
        </div>

        <ul className="nav-links">
          <li className="dropdown">
            Shop
            <div className="dropdown-menu">
              <span>Oversized Tees</span>
              <span>Hoodies</span>
              <span>Jackets</span>
            </div>
          </li>

          <li>Collections</li>
          <li>About</li>
          <li>Journal</li>

          <li className="cart">
            Cart
            <span className="cart-count">2</span>
          </li>
          <li>Profile</li>
        </ul>
      </nav>

      {/* Announcement Bar */}
      <div className={`announcement ${hideNav ? "hide" : ""}`}>
        <div className="announcement-content">
          <span className="announcement-badge">NEW</span>
          <span className="announcement-text">
            Complimentary Shipping on All Orders
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;