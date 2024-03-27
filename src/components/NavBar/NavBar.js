import "./NavBar.scss";
import menuIcon from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import { Link } from "react-router-dom";

export default function NavBar({ toggleMenu }) {
  return (
    <nav className="nav">
      <img
        className="menu-icon"
        src={menuIcon}
        alt="menu"
        onClick={toggleMenu}
      />
      <Link to="/" className="nav__logo">
        <img src={logo} alt="audiophile logo" />
      </Link>
      <img className="cart-icon" src={cart} alt="cart" />
    </nav>
  );
}
