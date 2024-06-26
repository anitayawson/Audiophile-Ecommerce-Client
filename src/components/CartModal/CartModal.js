import { forwardRef } from "react";
import { Box } from "@mui/material";
import { formatNumber } from "../../utils";
import "./CartModal.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { useNavigate } from "react-router-dom";
import CartIcon from "../../assets/icons/icon-cart.png";

const CartModal = forwardRef(({ cartItems, setCartItems, onClose }, ref) => {
  const navigate = useNavigate();

  const handleSetQuantity = (index, newQuantity) => {
    if (newQuantity === 0) {
      const updatedCartItems = cartItems.filter((item, idx) => idx !== index);
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
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

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
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
        </div>
      ) : (
        <div className="cart__container">
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
                className="cart__quantity-selector"
                quantity={item.quantity}
                setQuantity={(newQuantity) =>
                  handleSetQuantity(index, newQuantity)
                }
                removeZero={true}
              />
            </article>
          ))}
          <div className="cart__total-container">
            <p className="cart__total-text">Total</p>
            <h6 className="cart__total-price">
              $ {formatNumber(calculateTotalPrice())}
            </h6>
          </div>
          <button onClick={handleCheckout} className="cart__checkout-btn">
            Checkout
          </button>
        </div>
      )}
    </Box>
  );
});

export default CartModal;
