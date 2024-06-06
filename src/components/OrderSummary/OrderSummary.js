import "./OrderSummary.scss";
import { formatNumber } from "../../utils";

export default function OrderSummary({
  cartItems,
  totalPrice,
  shippingCost,
  VAT,
  grandTotal,
}) {
  return (
    <section className="summary">
      <h6 className="summary__title">Summary</h6>

      {cartItems.map((item, index) => (
        <article key={index} className="summary__item">
          <img src={item.image} alt={item.name} className="summary__item-img" />
          <div className="summary__item-details">
            <p className="summary__item-name">{item.name}</p>
            <p className="summary__item-price">$ {formatNumber(item.price)}</p>
          </div>
          <p className="summary__quantity">x{item.quantity}</p>
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
      <button type="submit" className="summary__btn">
        Continue & Pay
      </button>
    </section>
  );
}
