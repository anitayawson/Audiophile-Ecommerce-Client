import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Category.scss";

export default function Category() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/categories/${categoryId}`
        );
        setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [categoryId]);

  // const fetchProductsbyCategory = async () => {

  // }

  return (
    <section>
      <h1>{category.name}</h1>
    </section>
  );
}
