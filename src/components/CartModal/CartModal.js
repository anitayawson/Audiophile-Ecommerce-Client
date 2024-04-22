import { forwardRef } from "react";
import { Box } from "@mui/material";
import { formatNumber } from "../../utils";
import "./CartModal.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/icon-cart.png";

const CartModal = forwardRef(({ cartItems, setCartItems }, ref) => {
  const handleSetQuantity = (index, newQuantity) => {
    updateCartItemQuantity(index, newQuantity);
  };

  const updateCartItemQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    newQuantity = Math.max(newQuantity, 1);
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <Box ref={ref} className="cart" tabIndex={-1}>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img className="empty-cart__icon" src={CartIcon} alt="cart icon" />
          <p className="empty-cart__message">Your cart is empty.</p>
          <p className="empty-cart__submessage">
            Start adding items to your cart to see them here.
          </p>
          <Link to="/" className="empty-cart__btn">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart__header">
            <h6 className="cart__title">Cart ({cartItems.length})</h6>
            {cartItems.length > 0 && (
              <p className="cart__remove-btn" onClick={removeAllItems}>
                Remove all
              </p>
            )}
          </div>
          {cartItems.map((item, index) => (
            <article key={index} className="cart__item">
              <img
                src={item.image}
                alt={item.name}
                className="cart__item-img"
              />
              <div>
                <p className="cart__item-name">{item.name}</p>
                <p className="cart__item-price">$ {formatNumber(item.price)}</p>
              </div>
              <QuantitySelector
                quantity={item.quantity}
                setQuantity={(newQuantity) =>
                  handleSetQuantity(index, newQuantity)
                }
              />
            </article>
          ))}
          <div className="cart__total-container">
            <p className="cart__total-text">Total</p>
            <h6 className="cart__total-price">
              $ {formatNumber(calculateTotalPrice())}
            </h6>
          </div>
          {cartItems.length > 0 && (
            <Link to="/checkout" className="cart__checkout-btn">
              Checkout
            </Link>
          )}
        </>
      )}
    </Box>
  );
});

export default CartModal;
