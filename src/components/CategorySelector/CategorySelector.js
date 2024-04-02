import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CategorySelector.scss";

import rightArrow from "../../assets/icons/icon-arrow-right.svg";

export default function CategorySelector({ onCloseMenu }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="category-section">
      {categories.map((category) => (
        <article key={category.id} className="category-selector__card">
          <img
            src={category.image}
            alt="item icon"
            className="category-selector__img"
          />
          <p className="category-selector__name">{category.name}</p>
          <Link
            to={`/category/${category.id}`}
            className="category-selector__btn"
            onClick={onCloseMenu}
          >
            <span className="category-selector__btn-text">Shop</span>
            <img src={rightArrow} alt="right arrow" />
          </Link>
        </article>
      ))}
    </section>
  );
}
