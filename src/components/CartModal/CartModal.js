import { forwardRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./CartModal.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartModal = forwardRef((props, ref) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

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
            <p className="cart__item-price">$ {item.price}</p>
          </div>
          <QuantitySelector />
        </article>
      ))}
      <div className="cart__total-container">
        <p className="cart__total-text">Total</p>
        <h6 className="cart__total-price">
          $ {calculateTotalPrice(cartItems)}
        </h6>
      </div>
      <button className="cart__checkout-btn">Checkout</button>
    </Box>
  );
});

export default CartModal;
