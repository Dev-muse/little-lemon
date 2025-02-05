import React from "react";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="container footer-container">
        <div className="footer__left">
          <img
            src="Logo@2x.png"
            alt="Little lemon logo "
            className="little_lemon"
          />
        </div>
        <div className="footer__right">
          <div className="footer__nav">
            <h4>Navigation</h4>
            <ul className="footer__nav">
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
          </div>
          <div className="footer__contact">
            <h4>Contact</h4>
            <ul>
              <li>Address</li>
              <li>Phone n.o</li>
              <li>email</li>
            </ul>
          </div>
          <div className="footer__social">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Tiktok</a>
              </li>
              <li>
                <a href="/">Pinterest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
