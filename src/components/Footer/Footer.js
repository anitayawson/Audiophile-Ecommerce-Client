import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Footer.scss";
import logo from "../../assets/icons/logo.svg";
import facebookIcon from "../../assets/icons/icon-facebook.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";

export default function Footer() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <footer className="footer">
      <hr className="footer__styled-border" />
      <div className="footer__logo-container">
        <img src={logo} alt="audiophile logo" className="footer__logo" />
      </div>
      <ul className="footer__menu">
        <Link to="/" className="footer__item">
          <li>Home</li>
        </Link>
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} className="footer__item">
            <li key={category.id}>{category.name}</li>
          </Link>
        ))}
      </ul>
      <p className="footer__body-text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="footer__tablet-wrapper">
        <p className="footer__copyright">Copyright 2024. All Rights Reserved</p>
        <div className="footer__social-icons">
          <img
            className="footer__social-icon"
            src={facebookIcon}
            alt="facebook"
          />
          <img
            className="footer__social-icon"
            src={twitterIcon}
            alt="twitter"
          />
          <img
            className="footer__social-icon"
            src={instagramIcon}
            alt="instagram"
          />
        </div>
      </div>
    </footer>
  );
}
