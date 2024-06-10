import "./App.scss";
import { useState, useRef, useEffect } from "react";
import { BASE_URL } from "./envVariables";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import { Modal } from "@mui/material";
import CartModal from "./components/CartModal/CartModal";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const cartModalRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

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
      <ScrollToTop />
      <div className="nav-container">
        <NavBar
          toggleMenu={toggleMenu}
          handleCartOpen={handleCartOpen}
          categories={categories}
          cartItems={cartItems}
        />
      </div>
      {showMenu && (
        <section className="menu">
          <CategorySelector onCloseMenu={closeMenu} categories={categories} />
        </section>
      )}
      <main onClick={closeMenu}>
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route
            path="/category/:categoryId"
            element={<Category categories={categories} />}
          />
          <Route
            path="/product/:slug"
            element={
              <ProductDetails
                updateCartItems={updateCartItems}
                cartItems={cartItems}
                categories={categories}
                handleCartOpen={handleCartOpen}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
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
          <CartModal
            ref={cartModalRef}
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={handleCartClose}
          />
        </Modal>
      </main>
      <Footer categories={categories} />
    </BrowserRouter>
  );
}

export default App;
