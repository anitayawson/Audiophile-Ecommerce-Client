import "./Footer.scss";
import logo from "../../assets/icons/logo.svg";
import facebookIcon from "../../assets/icons/icon-facebook.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="audiophile logo" className="footer__logo" />
      <ul>
        <li>Home</li>
        <li>Headphones</li>
      </ul>
      <div className="footer__body-text">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="footer__copyright">Copyright 2024. All Rights Reserved</p>
      </div>
      <div className="footer__social-icons">
        <img src={facebookIcon} alt="facebook" />
        <img src={twitterIcon} alt="twitter" />
        <img src={instagramIcon} alt="instagram" />
      </div>
    </footer>
  );
}
