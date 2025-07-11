import { useParams, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../../envVariables";
import { useState, useEffect } from "react";
// import axios from "axios";
import "./ProductDetails.scss";
import { formatNumber } from "../../utils";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import InfoSection from "../../components/InfoSection/InfoSection";
import RelatedProductCard from "../../components/RelatedProductCard/RelatedProductCard";

export default function ProductDetails({
  updateCartItems,
  cartItems,
  categories,
  handleCartOpen,
}) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  // const [boxContent, setBoxContent] = useState([]);
  // const [galleryImages, setGalleryImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // const fetchProductDetails = async () => {
    //   try {
    //     // Fetch product details
    //     const productResponse = await axios.get(
    //       `${BASE_URL}/api/products/slug/${slug}`
    //     );
    //     setProduct(productResponse.data);
    //     console.log(productResponse.data);

    //     const productId = productResponse.data.id;

    //     // Fetch box content
    //     const boxContentResponse = await axios.get(
    //       `${BASE_URL}/api/box_content/product/${productId}`
    //     );
    //     setBoxContent(boxContentResponse.data);

    //     // Fetch gallery images
    //     const galleryImagesResponse = await axios.get(
    //       `${BASE_URL}/api/gallery/product/${productId}`
    //     );
    //     setGalleryImages(galleryImagesResponse.data);
    //   } catch (error) {
    //     console.error("Error fetching product details:", error);
    //   }
    // };

    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const matchedProduct = data.find((p) => p.slug === slug);
        if (!matchedProduct) {
          console.error("Product not found");
          return;
        }

        setProduct(matchedProduct);
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
      image: product?.image?.mobile,
      quantity: quantity,
    };
    const updatedCartItems = [...cartItems, newItem];
    updateCartItems(updatedCartItems);
    window.scrollTo(0, 0);
    handleCartOpen();
  };

  const boxContent = product?.includes || [];
  const galleryImages = product?.gallery || {};
  // const relatedProducts = product?.others || [];

  return (
    <section>
      <div className="nav-bg"></div>
      <div className="product">
        <p onClick={navigateBack} className="product__back-btn">
          Go Back
        </p>
        <article className="product__card">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={product?.image?.mobile}
            />
            <source
              media="(max-width: 1279px)"
              srcSet={product?.image?.tablet}
            />
            <img
              className="product__img"
              src={product?.image?.desktop}
              alt={product.name}
            />
          </picture>
          <div className="product__content">
            {product.new && <p className="product__new-product">New Product</p>}
            <h2 className="product__name">{product.name}</h2>
            <p className="product__description">{product.description}</p>
            <h6 className="product__price">
              $ {product.price ? formatNumber(product.price) : "N/A"}
            </h6>
            <div className="product__cta">
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              <button className="product__btn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </article>

        <div className="product__details-wrapper">
          {product.features && (
            <div className="features">
              <h3 className="product__subtitle">Features</h3>
              {product.features.split("\n\n").map((paragraph, index) => (
                <p key={index} className="features__description">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="content">
            <h3 className="product__subtitle">In the Box</h3>
            <ul className="content__list">
              {boxContent.map((content) => (
                <li key={content.id} className="content__item">
                  <span className="content__qty">{content.quantity}x </span>
                  <span className="content__item">{content.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery__column-container">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={galleryImages?.first?.mobile}
              />
              <source
                media="(max-width: 1279px)"
                srcSet={galleryImages?.first?.tablet}
              />
              <img
                className="gallery__img"
                src={galleryImages?.first?.desktop}
                alt={product.name}
              />
            </picture>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={galleryImages?.second?.mobile}
              />
              <source
                media="(max-width: 1279px)"
                srcSet={galleryImages?.second?.tablet}
              />
              <img
                className="gallery__img"
                srcSet={galleryImages?.second?.desktop}
                alt={product.name}
              />
            </picture>
          </div>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={galleryImages?.third?.mobile}
            />
            <source
              media="(max-width: 1279px)"
              srcSet={galleryImages?.third?.tablet}
            />
            <img
              className="gallery__img"
              srcSet={galleryImages?.third?.desktop}
              alt={product.name}
            />
          </picture>
        </div>

        <div className="related-products">
          {/* <h3 className="related-products__title">You may also like</h3> */}
          <div className="related-products__list">
            {/* {relatedProducts.map((relatedProduct) => (
              <RelatedProductCard
                key={relatedProduct.id}
                product={relatedProduct}
              />
            ))} */}
          </div>
        </div>
      </div>
      <CategorySelector categories={categories} />
      <InfoSection />
    </section>
  );
}
