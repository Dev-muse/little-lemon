import "./footer.css";
import { Link } from "react-router-dom";

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
          </div>
          <div className="footer__contact">
            <h4>Contact</h4>
            <ul>
              <li>2435 W Belmont Ave Chicago, IL 60618</li>
              <li>(312) 555-7264</li>
              <li>contact@littlelemonchicago.com</li>
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
