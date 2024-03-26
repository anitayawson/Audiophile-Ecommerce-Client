import "./App.scss";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategorySelector from "./components/CategorySelector/CategorySelector";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
