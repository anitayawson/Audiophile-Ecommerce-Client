import { Link } from "react-router-dom";
import "./CategorySelector.scss";

import rightArrow from "../../assets/icons/icon-arrow-right.svg";

const sharedCategoryImages = {
  earphones:
    "https://res.cloudinary.com/duepohol4/image/upload/v1710783234/Audiophile/shared/desktop/image-category-thumbnail-earphones_qdo2ll.png",
  headphones:
    "https://res.cloudinary.com/duepohol4/image/upload/v1710783238/Audiophile/shared/desktop/image-category-thumbnail-headphones_fxnbiz.png",
  speakers:
    "https://res.cloudinary.com/duepohol4/image/upload/v1710783234/Audiophile/shared/desktop/image-category-thumbnail-speakers_ordhie.png",
};

export default function CategorySelector({ onCloseMenu, categories = [] }) {
  return (
    <section className="category-section">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          onClick={onCloseMenu}
          className="category-selector__card"
        >
          <img
            src={sharedCategoryImages[category.name.toLowerCase()] || ""}
            alt={`${category.name} icon`}
            className="category-selector__img"
          />
          <p className="category-selector__name">{category.name}</p>
          <div className="category-selector__btn">
            <span className="category-selector__btn-text">Shop</span>
            <img src={rightArrow} alt="right arrow" />
          </div>
        </Link>
      ))}
    </section>
  );
}
