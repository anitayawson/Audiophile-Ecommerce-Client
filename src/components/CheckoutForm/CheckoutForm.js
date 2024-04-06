import "./CheckoutForm.scss";

export default function CheckoutForm() {
  return (
    <form className="checkout-form">
      <h2 className="checkout-form__title">Checkout</h2>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Billing details</p>
        <label htmlFor="name" className="checkout-form__label">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="checkout-form__input"
          placeholder="Alexei Ward"
        />

        <label htmlFor="email" className="checkout-form__label">
          Email address
        </label>
        <input
          id="email"
          name="email"
          className="checkout-form__input"
          placeholder="alexei@mail.com"
        />

        <label htmlFor="number" className="checkout-form__label">
          Phone number
        </label>
        <input
          id="number"
          name="number"
          className="checkout-form__input"
          placeholder="+1 202-555-0136"
        />
      </article>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Shipping info</p>
        <label htmlFor="address" className="checkout-form__label">
          Address
        </label>
        <input
          id="address"
          name="address"
          className="checkout-form__input"
          placeholder="1137 Williams Avenue"
        />

        <label htmlFor="zipCode" className="checkout-form__label">
          ZIP code
        </label>
        <input
          id="zipCode"
          name="zipCode"
          className="checkout-form__input"
          placeholder="10001"
        />

        <label htmlFor="city" className="checkout-form__label">
          City
        </label>
        <input
          id="city"
          name="city"
          className="checkout-form__input"
          placeholder="New York"
        />

        <label htmlFor="country" className="checkout-form__label">
          Country
        </label>
        <input
          id="country"
          name="country"
          className="checkout-form__input"
          placeholder="United States"
        />
      </article>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Payment details</p>
        <label className="checkout-form__label">Payment method</label>
        <div className="checkout-form__payment-method">
          <input type="radio" name="options" id="e-money" value="e-money" />
          <p>e-Money</p>
        </div>
        <div className="checkout-form__payment-method">
          <input type="radio" name="options" id="cash" value="cash" />
          <p>Cash on Delivery</p>
        </div>
        <label htmlFor="emoneyNumber" className="checkout-form__label">
          e-Money number
        </label>
        <input
          id="emoneyNumber"
          name="emoneyNumber"
          className="checkout-form__input"
          placeholder="238521993"
        />

        <label htmlFor="emoneyPin" className="checkout-form__label">
          e-money PIN
        </label>
        <input
          id="emoneyPin"
          name="emoneyPin"
          className="checkout-form__input"
          placeholder="6891"
        />
      </article>
    </form>
  );
}
