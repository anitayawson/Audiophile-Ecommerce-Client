import { Link, useParams } from "react-router-dom";
// import { BASE_URL } from "../../envVariables";
import { useState, useEffect } from "react";
// import axios from "axios";
import "./Category.scss";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import InfoSection from "../../components/InfoSection/InfoSection";

export default function Category({ categories }) {
  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState({
    category: {},
    products: [],
  });

  // useEffect(() => {
  //   const fetchCategoryData = async () => {
  //     try {
  //       const [categoryResponse, productsResponse] = await Promise.all([
  //         axios.get(`${BASE_URL}/api/categories/${categoryId}`),
  //         axios.get(`${BASE_URL}/api/products/category/${categoryId}`),
  //       ]);

  //       setCategoryData({
  //         category: categoryResponse.data,
  //         products: productsResponse.data,
  //       });
  //       console.log(productsResponse.data);
  //     } catch (error) {
  //       console.error("Error fetching category data:", error);
  //     }
  //   };

  //   fetchCategoryData();
  // }, [categoryId]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const matchedCategory = categories.find(
          (cat) => cat.id.toString() === categoryId || cat.name === categoryId
        );

        const productsInCategory = data.filter(
          (product) =>
            product.category.toLowerCase() ===
            (matchedCategory?.name || categoryId).toLowerCase()
        );

        setCategoryData({
          category: matchedCategory || { name: categoryId },
          products: productsInCategory,
        });
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [categoryId, categories]);

  const { category, products } = categoryData;

  const sortedProducts = [...products].sort((a, b) => b.new - a.new);

  return (
    <section className="category">
      <div className="category__name-container">
        <h1 className="category__name">{category.name}</h1>
      </div>
      {sortedProducts.map((product) => (
        <article className="category__product-card" key={product.id}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={product.preview_images.mobile}
            />
            <source
              media="(max-width: 1279px)"
              srcSet={product.preview_images.tablet}
            />
            <img
              className="category__product-img"
              src={product.preview_images.desktop}
              alt={product.name}
            />
          </picture>
          <div className="category__content">
            {product.new && (
              <p className="category__new-product">New Product</p>
            )}
            <h2 className="category__product-name">{product.name}</h2>
            <p className="category__product-description">
              {product.description}
            </p>
            <Link
              to={`/product/${product.slug}`}
              className="category__product-btn"
            >
              See Product
            </Link>
          </div>
        </article>
      ))}

      <CategorySelector categories={categories} />
      <InfoSection />
    </section>
  );
}
