import { forwardRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { formatNumber } from "../../utils";
import "./CartModal.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { Link } from "react-router-dom";

const CartModal = forwardRef((props, ref) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateCartItemQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <Box ref={ref} className="cart">
      <div className="cart__header">
        <h6 className="cart__title">Cart ({cartItems.length})</h6>
        <p className="cart__remove-btn" onClick={removeAllItems}>
          Remove all
        </p>
      </div>
      {cartItems.map((item, index) => (
        <article key={index} className="cart__item">
          <img src={item.image} alt={item.name} className="cart__item-img" />
          <div>
            <p className="cart__item-name">{item.name}</p>
            <p className="cart__item-price">$ {formatNumber(item.price)}</p>
          </div>
          <QuantitySelector
            quantity={item.quantity}
            setQuantity={(newQuantity) =>
              updateCartItemQuantity(index, newQuantity)
            }
          />
        </article>
      ))}
      <div className="cart__total-container">
        <p className="cart__total-text">Total</p>
        <h6 className="cart__total-price">$ {calculateTotalPrice()}</h6>
      </div>
      <Link to="/checkout" className="cart__checkout-btn">
        Checkout
      </Link>
    </Box>
  );
});

export default CartModal;
