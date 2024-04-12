import "./OrderSummary.scss";
import { formatNumber } from "../../utils";

export default function OrderSummary({ handleCheckout, cartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingCost = 50;

  const VAT = Math.ceil(totalPrice * 0.2);

  const grandTotal = totalPrice + shippingCost + VAT;

  return (
    <section className="summary">
      <h6 className="summary__title">Summary</h6>

      {cartItems.map((item, index) => (
        <article key={index} className="summary__item">
          <img src={item.image} alt={item.name} className="summary__item-img" />
          <div className="summary__item-details">
            <p className="summary__item-name">{item.name}</p>
            <p className="summary__item-price">
              $ {formatNumber(item.price * item.quantity)}
            </p>
          </div>
          <p className="summary__quantity">{item.quantity}x</p>
        </article>
      ))}

      <article className="summary__total">
        <div className="summary__total-item">
          <p className="summary__total-label">Total</p>
          <p className="summary__total-price">$ {formatNumber(totalPrice)}</p>
        </div>
        <div className="summary__total-item">
          <p className="summary__total-label">Shipping</p>
          <p className="summary__total-price">$ {formatNumber(shippingCost)}</p>
        </div>
        <div className="summary__total-item">
          <p className="summary__total-label">VAT (Included)</p>
          <p className="summary__total-price">$ {formatNumber(VAT)}</p>
        </div>
        <div className="summary__total-item">
          <p className="summary__total-label">Grand Total</p>
          <p className="summary__total-price">$ {formatNumber(grandTotal)}</p>
        </div>
      </article>
      <button onClick={handleCheckout} className="summary__btn">
        Continue & Pay
      </button>
    </section>
  );
}
