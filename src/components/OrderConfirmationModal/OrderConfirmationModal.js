import { forwardRef } from "react";
import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../utils";
import "./OrderConfirmationModal.scss";

const OrderConfirmationModal = forwardRef(({ cartItems, grandTotal }, ref) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const returnToHome = () => {
    localStorage.removeItem("cartItems");
    navigate("/");
    window.location.reload();
  };

  const firstItem = cartItems[0];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box ref={ref} className="confirmation-modal">
      <div className="confirmation-modal__header">
        <img
          src="https://res.cloudinary.com/duepohol4/image/upload/v1710782894/Audiophile/checkout/icon-order-confirmation_zomwp5.svg"
          alt="order confirmation icon"
        />
        <h5 className="confirmation-modal__title">Thank you for your order</h5>
        <p className="confirmation-modal__subtitle">
          You will receive an email confirmation shortly.
        </p>
      </div>
      <article className="confirmation-modal__card">
        <div className="confirmation-modal__items">
          <div className="confirmation-modal__main-item">
            <img
              src={firstItem.image}
              alt={firstItem.name}
              className="confirmation-modal__item-img"
            />
            <div className="confirmation-modal__item-details">
              <p className="cart__item-name">{firstItem.name}</p>
              <p className="cart__item-price">$ {firstItem.price}</p>
            </div>
            <p className="summary__quantity">x{firstItem.quantity}</p>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {cartItems.slice(1).map((item, index) => (
              <div key={index} className="confirmation-modal__item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="confirmation-modal__item-img"
                />
                <div className="confirmation-modal__item-details">
                  <p className="cart__item-name">{item.name}</p>
                  <p className="cart__item-price">$ {item.price}</p>
                </div>
                <p className="summary__quantity">x{item.quantity}</p>
              </div>
            ))}
          </Collapse>
          {cartItems.length > 1 && (
            <div className="confirmation-modal__other-items">
              <hr className="confirmation-modal__border" />
              <button
                onClick={handleExpandClick}
                className="confirmation-modal__expand-btn"
              >
                {expanded
                  ? "Show Less"
                  : `and ${cartItems.length - 1} other item(s)`}
              </button>
            </div>
          )}
        </div>
        <div className="confirmation-modal__grand-total">
          <p className="confirmation-modal__total-label">Grand Total</p>
          <p className="confirmation-modal__total-price">
            $ {formatNumber(grandTotal)}
          </p>
        </div>
      </article>
      <button onClick={returnToHome} className="confirmation-modal__btn">
        Back to Home
      </button>
    </Box>
  );
});

export default OrderConfirmationModal;
