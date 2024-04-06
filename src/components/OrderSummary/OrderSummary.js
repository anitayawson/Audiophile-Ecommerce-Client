import "./OrderSummary.scss";

export default function OrderSummary() {
  return (
    <section className="summary">
      <h6 className="summary__title">Summary</h6>
      <article className="summary__item">
        <img
          src="https://res.cloudinary.com/duepohol4/image/upload/v1710782875/Audiophile/cart/image-xx99-mark-two-headphones_fksqhm.jpg"
          alt="prod img"
          className="summary__item-img"
        />
        <div className="summary__item-details">
          <p className="summary__item-name">Title</p>
          <p className="summary__item-price">$ 100</p>
        </div>
        <p className="summary__quantity">1x</p>
      </article>

      <article className="summary__total">
        <div className="summary__total-item">
          <p className="summary__total-label">Total</p>
          <p className="summary__total-price">$ 5,396</p>
        </div>
        <div className="summary__total-item">
          <p className="summary__total-label">Shipping</p>
          <p className="summary__total-price">$ 50</p>
        </div>
        <div className="summary__total-item">
          <p className="summary__total-label">VAT (Included)</p>
          <p className="summary__total-price">$ 1,079</p>
        </div>
        <div className="summary__total-item">
          <p className="summary__total-label">Grand Total</p>
          <p className="summary__total-price">$ 5,446</p>
        </div>
      </article>
      <button className="summary__btn">Continue & Pay</button>
    </section>
  );
}
