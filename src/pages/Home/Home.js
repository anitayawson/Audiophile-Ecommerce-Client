import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Home() {
  const [newProduct, setNewProduct] = useState({});
  const [categories, setCategories] = useState([]);

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

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <main>
      <header className="header">
        <NavBar />
        <div className="header__body">
          <p className="header__overline">New Product</p>
          <h2 className="header__title">{newProduct.name}</h2>
          <p className="header__description">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="header__btn">See Product</button>
        </div>
      </header>
      <section>
        <section className="category-list">
          {categories.map((category) => (
            <div key={category.id}>
              <p>{category.name}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
