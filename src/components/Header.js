import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="logo">VSynergize</div>
      <nav className={isMobile ? "nav-mobile" : "nav"}>
        <ul >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/solutions">Solutions</NavLink></li>
          <li><NavLink to="/industries">Industries</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <button className="mobile-menu-icon d-md-none" onClick={() => setIsMobile(!isMobile)}>☰</button>
    </header>
  );
};

export default Header;
