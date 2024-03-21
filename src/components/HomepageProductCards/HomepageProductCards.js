import { useState, useEffect } from "react";
import axios from "axios";
import "./HomepageProductCards.scss";

export default function HomepageProductCards() {
  const [zx9Speaker, setZx9Speaker] = useState([]);
  const [zx7Speaker, setZx7Speaker] = useState([]);
  const [earphones, setEarphones] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseZx9 = await axios.get(
          "http://localhost:8080/api/products/6"
        );
        setZx9Speaker(responseZx9.data);
        // console.log(responseZx9.data);

        const responseZx7 = await axios.get(
          "http://localhost:8080/api/products/5"
        );
        setZx7Speaker(responseZx7.data);
        // console.log(responseZx9.data);

        const responseEarphones = await axios.get(
          "http://localhost:8080/api/products/1"
        );
        setEarphones(responseEarphones.data);
        // console.log(responseZx9.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="product-cards">
      {/* ZX9 Speaker Card */}
      <article className="zx9">
        <img
          className="zx9__img"
          src="https://res.cloudinary.com/duepohol4/image/upload/v1710782941/Audiophile/home/mobile/image-speaker-zx9_vyeo5h.png"
          alt="zx9 speaker"
        />
        <h2 className="zx9__title">{zx9Speaker.name}</h2>
        <p className="zx9__description">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="zx9__btn">See Product</button>
      </article>

      {/* ZX7 Speaker Card */}
      <article className="zx7">
        <h4 className="zx7__title">{zx7Speaker.name}</h4>
        <button className="zx7__btn">See Product</button>
      </article>

      <img
        className="yx1__img"
        src="https://res.cloudinary.com/duepohol4/image/upload/v1710782929/Audiophile/home/mobile/image-earphones-yx1_as5ch4.jpg"
        alt="yx1 earphones"
      />

      {/* YX1 Earphones Card */}
      <article className="yx1">
        <h4 className="yx1__title">{earphones.name}</h4>
        <button className="yx1__btn">See Product</button>
      </article>
    </section>
  );
}
