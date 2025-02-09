import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <img
        src="Logo@2x.png"
        width={"147.5px"}
        height={"40px"}
        alt="little lemon logo"
      />
      <ul className="navbar__menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#About">About</Link>
        </li>
        <li>
          <Link to="/#Specials">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/#Order">Order Online</Link>
        </li>
        <li>
          <Link to="/#Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
