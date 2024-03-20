import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
