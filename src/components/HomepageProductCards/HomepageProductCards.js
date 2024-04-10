import { useState, useEffect } from "react";
import { BASE_URL } from "../../envVariables";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HomepageProductCards.scss";

export default function HomepageProductCards() {
  const [zx9Speaker, setZx9Speaker] = useState([]);
  const [zx7Speaker, setZx7Speaker] = useState([]);
  const [earphones, setEarphones] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseZx9 = await axios.get(`${BASE_URL}/api/products/id/6`);
        setZx9Speaker(responseZx9.data);
        // console.log(responseZx9.data);

        const responseZx7 = await axios.get(`${BASE_URL}/api/products/id/5`);
        setZx7Speaker(responseZx7.data);
        // console.log(responseZx9.data);

        const responseEarphones = await axios.get(
          `${BASE_URL}/api/products/id/1`
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
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://res.cloudinary.com/duepohol4/image/upload/v1710782941/Audiophile/home/mobile/image-speaker-zx9_vyeo5h.png"
          />
          <source
            media="(max-width: 1279px)"
            srcSet="https://res.cloudinary.com/duepohol4/image/upload/v1710782909/Audiophile/home/tablet/image-speaker-zx9_y2cpdo.png"
          />
          <img
            className="zx9__img"
            src="https://res.cloudinary.com/duepohol4/image/upload/v1710782925/Audiophile/home/desktop/image-speaker-zx9_pjfxki.png"
            alt="zx9 speaker"
          />
        </picture>

        <div className="zx9__body">
          <h2 className="zx9__title">{zx9Speaker?.name}</h2>
          <p className="zx9__description">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={`/product/${zx9Speaker?.slug}`} className="zx9__btn">
            See Product
          </Link>
        </div>
      </article>

      {/* ZX7 Speaker Card */}
      <article className="zx7">
        <h4 className="zx7__title">{zx7Speaker?.name}</h4>
        <Link to={`/product/${zx7Speaker?.slug}`} className="zx7__btn">
          See Product
        </Link>
      </article>

      <div className="yx1__container">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://res.cloudinary.com/duepohol4/image/upload/v1710782929/Audiophile/home/mobile/image-earphones-yx1_as5ch4.jpg"
          />
          <source
            media="(max-width: 1279px)"
            srcSet="https://res.cloudinary.com/duepohol4/image/upload/v1710782900/Audiophile/home/tablet/image-earphones-yx1_hk9cqt.jpg"
          />
          <img
            src="https://res.cloudinary.com/duepohol4/image/upload/v1710782913/Audiophile/home/desktop/image-earphones-yx1_vjel4p.jpg"
            className="yx1__img"
            alt="yx1 earphones"
          />
        </picture>

        {/* YX1 Earphones Card */}
        <article className="yx1">
          <h4 className="yx1__title">{earphones?.name}</h4>
          <Link to={`/product/${earphones?.slug}`} className="yx1__btn">
            See Product
          </Link>
        </article>
      </div>
    </section>
  );
}
