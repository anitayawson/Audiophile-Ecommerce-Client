import "./App.scss";
import { useState, useRef, useEffect } from "react";
import { BASE_URL } from "./envVariables";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import { Modal } from "@mui/material";
import CartModal from "./components/CartModal/CartModal";

function App() {
  const cartModalRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="nav-container">
        <NavBar
          toggleMenu={toggleMenu}
          handleCartOpen={handleCartOpen}
          categories={categories}
        />
      </div>
      {showMenu && (
        <section className="menu">
          <CategorySelector onCloseMenu={closeMenu} categories={categories} />
        </section>
      )}
      <main onClick={closeMenu}>
        <Routes>
          <Route path="/" element={<Home />} itemCategories={categories} />
          <Route
            path="/category/:categoryId"
            element={<Category />}
            categories={categories}
          />
          <Route
            path="/product/:slug"
            element={<ProductDetails />}
            categories={categories}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Modal
          open={cartOpen}
          onClose={handleCartClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="cart-modal-container"
          sx={{
            "& .MuiBackdrop-root": {
              top: "6rem",
            },
          }}
        >
          <CartModal ref={cartModalRef} />
        </Modal>
      </main>
      <Footer categories={categories} />
    </BrowserRouter>
  );
}

export default App;
