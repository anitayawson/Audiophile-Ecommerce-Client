import { useState, useEffect } from "react";
import { BASE_URL } from "../../envVariables";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.scss";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import HomepageProductCards from "../../components/HomepageProductCards/HomepageProductCards";
import InfoSection from "../../components/InfoSection/InfoSection";

export default function Home({ categories }) {
  const [newProduct, setNewProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchNewProduct = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/category/1?isNew=1`
      );
      setNewProduct(response.data[0]);
    } catch (error) {
      console.error("Error fetching new product:", error);
    }
  };

  useEffect(() => {
    fetchNewProduct();
    setTimeout(() => setIsLoaded(true), 200);
  }, []);

  return (
    <main>
      <header className="header">
        <div className={`header__body ${isLoaded ? "fade-in" : ""}`}>
          <p className="header__overline">New Product</p>
          <h1 className="header__title">{newProduct?.name}</h1>
          <p className="header__description">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={`/product/${newProduct.slug}`} className="header__btn">
            See Product
          </Link>
        </div>
      </header>
      <CategorySelector categories={categories} />
      <HomepageProductCards />
      <InfoSection />
    </main>
  );
}
