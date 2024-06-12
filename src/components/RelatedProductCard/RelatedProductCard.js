import { Link } from "react-router-dom";
import "./RelatedProductCard.scss";

export default function RelatedProductCard({ product }) {
  return (
    <article className="related-product">
      <img src="" alt="product img" />
      <h3 className="related-product__name">{product.name}</h3>
      <Link to={`/product/${product.slug}`} className="related-product__btn">
        See Product
      </Link>
    </article>
  );
}
