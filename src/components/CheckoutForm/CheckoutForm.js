import "./CheckoutForm.scss";

export default function CheckoutForm() {
  return (
    <form className="checkout-form">
      <h2 className="checkout-form__title">Checkout</h2>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Billing details</p>
        <div className="checkout-form__tablet-wrapper">
          <label className="checkout-form__label">
            Name
            <input
              id="name"
              name="name"
              className="checkout-form__input"
              placeholder="Alexei Ward"
            />
          </label>

          <label className="checkout-form__label">
            Email address
            <input
              id="email"
              name="email"
              className="checkout-form__input"
              placeholder="alexei@mail.com"
            />
          </label>
          <label className="checkout-form__label">
            Phone number
            <input
              id="number"
              name="number"
              className="checkout-form__input"
              placeholder="+1 202-555-0136"
            />
          </label>
        </div>
      </article>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Shipping info</p>
        <label className="checkout-form__label">
          Address
          <input
            id="address"
            name="address"
            className="checkout-form__input"
            placeholder="1137 Williams Avenue"
          />
        </label>

        <div className="checkout-form__tablet-wrapper">
          <label className="checkout-form__label">
            ZIP code
            <input
              id="zipCode"
              name="zipCode"
              className="checkout-form__input"
              placeholder="10001"
            />
          </label>

          <label className="checkout-form__label">
            City
            <input
              id="city"
              name="city"
              className="checkout-form__input"
              placeholder="New York"
            />
          </label>
          <label className="checkout-form__label">
            Country
            <input
              id="country"
              name="country"
              className="checkout-form__input"
              placeholder="United States"
            />
          </label>
        </div>
      </article>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Payment details</p>

        <label className="checkout-form__label">
          Payment method
          <div className="checkout-form__payment-method">
            <input type="radio" name="options" id="e-money" value="e-money" />
            <p>e-Money</p>
          </div>
        </label>
        <div className="checkout-form__payment-method">
          <input type="radio" name="options" id="cash" value="cash" />
          <p>Cash on Delivery</p>
        </div>

        <div className="checkout-form__tablet-wrapper">
          <label className="checkout-form__label">
            e-Money number
            <input
              id="emoneyNumber"
              name="emoneyNumber"
              className="checkout-form__input"
              placeholder="238521993"
            />
          </label>

          <label className="checkout-form__label">
            e-money PIN
            <input
              id="emoneyPin"
              name="emoneyPin"
              className="checkout-form__input"
              placeholder="6891"
            />
          </label>
        </div>
      </article>
    </form>
  );
}
