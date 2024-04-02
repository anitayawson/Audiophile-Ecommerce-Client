import { useNavigate } from "react-router-dom";
import "./Checkout.scss";

export default function Checkout() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <div className="nav-bg"></div>
      <div className="checkout">
        <p onClick={navigateBack} className="checkout__back-btn">
          Go Back
        </p>
        <form className="checkout__form">
          <h2 className="checkout__title">Checkout</h2>

          <article className="checkout__section">
            <p className="checkout__subtitle">Billing details</p>
            <label className="checkout__form-label">Name</label>
            <input className="checkout__form-input" placeholder="Alexei Ward" />

            <label className="checkout__form-label">Email address</label>
            <input
              className="checkout__form-input"
              placeholder="alexei@mail.com"
            />

            <label className="checkout__form-label">Phone number</label>
            <input
              className="checkout__form-input"
              placeholder="+1 202-555-0136"
            />
          </article>

          <article className="checkout__section">
            <p className="checkout__subtitle">Shipping info</p>
            <label className="checkout__form-label">Address</label>
            <input
              className="checkout__form-input"
              placeholder="1137 Williams Avenue"
            />

            <label className="checkout__form-label">ZIP code</label>
            <input className="checkout__form-input" placeholder="10001" />

            <label className="checkout__form-label">City</label>
            <input className="checkout__form-input" placeholder="New York" />

            <label className="checkout__form-label">Country</label>
            <input
              className="checkout__form-input"
              placeholder="United States"
            />
          </article>

          <article className="checkout__section">
            <p className="checkout__subtitle">Payment details</p>
            <label className="checkout__form-label">Payment method</label>
            <input
              className="checkout__form-input"
              type="radio"
              name="options"
              id="e-money"
              value="e-money"
            />
            <input
              className="checkout__form-input"
              type="radio"
              name="options"
              id="cash"
              value="cash"
            />

            <label className="checkout__form-label">e-Money number</label>
            <input className="checkout__form-input" placeholder="238521993" />

            <label className="checkout__form-label">e-money PIN</label>
            <input className="checkout__form-input" placeholder="6891" />
          </article>
        </form>
      </div>
    </section>
  );
}
