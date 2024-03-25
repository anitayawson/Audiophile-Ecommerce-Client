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
        <li className="footer__item">Home</li>
        {categories.map((category) => (
          <li key={category.id} className="footer__item">
            {category.name}
          </li>
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
          <img src={facebookIcon} alt="facebook" />
          <img src={twitterIcon} alt="twitter" />
          <img src={instagramIcon} alt="instagram" />
        </div>
      </div>
    </footer>
  );
}
