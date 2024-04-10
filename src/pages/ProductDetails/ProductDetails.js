import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../envVariables";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import InfoSection from "../../components/InfoSection/InfoSection";

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [boxContent, setBoxContent] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Fetch product details
        const productResponse = await axios.get(
          `${BASE_URL}/api/products/slug/${slug}`
        );
        setProduct(productResponse.data);
        console.log(productResponse.data);

        const productId = productResponse.data.id;

        // Fetch box content
        const boxContentResponse = await axios.get(
          `${BASE_URL}/api/box_content/product/${productId}`
        );
        setBoxContent(boxContentResponse.data);

        // Fetch gallery images
        const galleryImagesResponse = await axios.get(
          `${BASE_URL}/api/gallery/product/${productId}`
        );
        setGalleryImages(galleryImagesResponse.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [slug]);

  const navigateBack = () => {
    navigate(-1);
  };

  const addToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product?.images?.mobile,
      quantity: quantity,
    };
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...existingCartItems, newItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <section>
      <div className="nav-bg"></div>
      <div className="product">
        <p onClick={navigateBack} className="product__back-btn">
          Go Back
        </p>
        <article className="product__card">
          <img
            className="product__img"
            src={product?.images?.mobile}
            alt={product.name}
          />
          <div className="product__content">
            {product.isNew === 1 && (
              <p className="product__new-product">New Product</p>
            )}
            <h2 className="product__name">{product.name}</h2>
            <p className="product__description">{product.description}</p>
            <h6 className="product__price">$ {product.price}</h6>
            <div className="product__cta">
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              <button className="product__btn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </article>

        <div className="features">
          <h3 className="product__subtitle">Features</h3>
          <p className="features__description">{product.features}</p>
        </div>

        <div className="content">
          <h3 className="product__subtitle">In the Box</h3>
          <ul className="content__list">
            {boxContent.map((content) => (
              <li key={content.id} className="content__item">
                <span className="content__qty">{content.quantity}x </span>
                <span className="content__item">{content.item_name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CategorySelector />
      <InfoSection />
    </section>
  );
}
