import "./App.scss";
import { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

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
        <NavBar toggleMenu={toggleMenu} handleCartOpen={handleCartOpen} />
      </div>
      {showMenu && (
        <section className="menu">
          <CategorySelector onCloseMenu={closeMenu} />
        </section>
      )}
      <main onClick={closeMenu}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Modal
          open={cartOpen}
          onClose={handleCartClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="cart-modal-container"
        >
          <CartModal />
        </Modal>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
