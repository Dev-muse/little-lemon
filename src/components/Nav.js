import React from "react";
import "./nav.css";

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
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#Reservations">Reservations</a>
        </li>
        <li>
          <a href="#Order">Order Online</a>
        </li>
        <li>
          <a href="#Login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
