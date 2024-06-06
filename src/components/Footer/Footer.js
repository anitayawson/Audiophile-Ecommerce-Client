import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/icons/logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/icon-instagram.svg";

export default function Footer({ categories }) {
  const handleItemClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <hr className="footer__styled-border" />
      <div className="footer__header-container">
        <div className="footer__logo-container">
          <Link to="/" className="footer__logo">
            <img onClick={handleItemClick} src={logo} alt="audiophile logo" />
          </Link>
        </div>
        <ul className="footer__menu">
          <Link to="/" className="footer__item">
            <li onClick={handleItemClick}>Home</li>
          </Link>
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className="footer__item"
            >
              <li onClick={handleItemClick}>{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="footer__body-wrapper">
        <p className="footer__body-text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="footer__desktop-social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <FacebookIcon className="footer__social-icon" />
          </a>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <TwitterIcon className="footer__social-icon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <InstagramIcon className="footer__social-icon" />
          </a>
        </div>
      </div>

      <div className="footer__tablet-wrapper">
        <p className="footer__copyright">Copyright © 2024 Anita Yawson</p>
        <div className="footer__social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <FacebookIcon className="footer__social-icon" />
          </a>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <TwitterIcon className="footer__social-icon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <InstagramIcon className="footer__social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
