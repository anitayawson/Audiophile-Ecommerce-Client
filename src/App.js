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

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="nav-container">
        <NavBar toggleMenu={toggleMenu} />
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
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
