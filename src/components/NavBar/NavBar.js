import "./NavBar.scss";
import menuIcon from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";

export default function NavBar() {
  return (
    <nav className="nav">
      <img className="menu-icon" src={menuIcon} alt="menu" />
      <img className="nav__logo" src={logo} alt="audiophile logo" />
      <img className="cart-icon" src={cart} alt="cart" />
    </nav>
  );
}
