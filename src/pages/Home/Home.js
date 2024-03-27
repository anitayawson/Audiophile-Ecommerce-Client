import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import HomepageProductCards from "../../components/HomepageProductCards/HomepageProductCards";
import InfoSection from "../../components/InfoSection/InfoSection";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Home() {
  const [newProduct, setNewProduct] = useState({});

  const fetchNewProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/products/category/1?isNew=1"
      );
      setNewProduct(response.data[0]);
      // console.log(response.data[0]);
    } catch (error) {
      console.error("Error fetching new product:", error);
    }
  };

  useEffect(() => {
    fetchNewProduct();
  }, []);

  return (
    <main>
      <header className="header">
        <div className="header__body">
          <p className="header__overline">New Product</p>
          <h1 className="header__title">{newProduct?.name}</h1>
          <p className="header__description">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="header__btn">See Product</button>
        </div>
      </header>
      <CategorySelector />
      <HomepageProductCards />
      <InfoSection />
    </main>
  );
}
