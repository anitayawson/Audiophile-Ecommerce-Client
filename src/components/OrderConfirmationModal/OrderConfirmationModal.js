import { forwardRef } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./OrderConfirmationModal.scss";

const OrderConfirmationModal = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
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
              src="https://res.cloudinary.com/duepohol4/image/upload/v1710782875/Audiophile/cart/image-xx99-mark-two-headphones_fksqhm.jpg"
              alt="prod img"
              className="confirmation-modal__item-img"
            />
            <div className="confirmation-modal__item-details">
              <p className="cart__item-name">XX99 MK II</p>
              <p className="cart__item-price">$ 100</p>
            </div>
            <p className="summary__quantity">x1</p>
          </div>
          <div className="confirmation-modal__other-items">
            <hr className="confirmation-modal__border" />
            <p>and 2 other item(s)</p>
          </div>
        </div>
        <div className="confirmation-modal__grand-total">
          <p className="confirmation-modal__total-label">Grand Total</p>
          <p className="confirmation-modal__total-price">$ 5,446</p>
        </div>
      </article>
      <button onClick={returnToHome} className="confirmation-modal__btn">
        Back to Home
      </button>
    </Box>
  );
});

export default OrderConfirmationModal;
