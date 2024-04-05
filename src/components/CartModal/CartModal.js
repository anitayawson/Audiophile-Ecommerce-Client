import { forwardRef } from "react";
import { Box } from "@mui/material";
import "./CartModal.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartModal = forwardRef((props, ref) => {
  return (
    <Box ref={ref} className="cart">
      <div className="cart__header">
        <h6 className="cart__title">Cart (3)</h6>
        <p className="cart__remove-btn">Remove all</p>
      </div>
      <article className="cart__item">
        <img
          src="https://res.cloudinary.com/duepohol4/image/upload/v1710782875/Audiophile/cart/image-xx99-mark-two-headphones_fksqhm.jpg"
          alt="prod img"
          className="cart__item-img"
        />
        <div>
          <p className="cart__item-name">Title</p>
          <p className="cart__item-price">$ 100</p>
        </div>
        <QuantitySelector />
      </article>
      <div className="cart__total-container">
        <p className="cart__total-text">Total</p>
        <h6 className="cart__total-price">$ 100</h6>
      </div>
      <button className="cart__checkout-btn">Checkout</button>
    </Box>
  );
});

export default CartModal;
