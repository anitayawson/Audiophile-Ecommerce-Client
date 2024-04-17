import "./CheckoutForm.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Wrong email format").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  zip_code: Yup.string().required("ZIP code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("e-money");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip_code: "",
      city: "",
      country: "",
      payment_method: "",
      emoney_number: "",
      emoney_pin: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Form submission
      console.log(values);
    },
  });

  const handlePaymentMethodClick = (value) => {
    setPaymentMethod(value);
    const radioInput = document.getElementById(value);
    if (radioInput) {
      radioInput.click();
    }
  };

  return (
    <form className="checkout-form" onSubmit={formik.handleSubmit}>
      <h2 className="checkout-form__title">Checkout</h2>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Billing details</p>
        <div className="checkout-form__tablet-wrapper">
          <label
            className={`checkout-form__label ${
              formik.touched.name && formik.errors.name ? "error" : ""
            }`}
          >
            Name
            {formik.touched.name && formik.errors.name ? (
              <div className="error-text">{formik.errors.name}</div>
            ) : null}
            <input
              id="name"
              name="name"
              className={`checkout-form__input ${
                formik.touched.name && formik.errors.name ? "error-border" : ""
              }`}
              placeholder="Alexei Ward"
              {...formik.getFieldProps("name")}
            />
          </label>

          <label
            className={`checkout-form__label ${
              formik.touched.email && formik.errors.email ? "error" : ""
            }`}
          >
            Email Address
            {formik.touched.email && formik.errors.email ? (
              <div className="error-text">{formik.errors.email}</div>
            ) : null}
            <input
              id="email"
              name="email"
              className={`checkout-form__input ${
                formik.touched.email && formik.errors.email
                  ? "error-border"
                  : ""
              }`}
              placeholder="alexei@mail.com"
              {...formik.getFieldProps("email")}
            />
          </label>
          <label
            className={`checkout-form__label ${
              formik.touched.phone && formik.errors.phone ? "error" : ""
            }`}
          >
            Phone Number
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error-text">{formik.errors.phone}</div>
            ) : null}
            <InputMask
              mask="+1 999-999-9999"
              maskChar=" "
              id="phone"
              name="phone"
              className={`checkout-form__input ${
                formik.touched.phone && formik.errors.phone
                  ? "error-border"
                  : ""
              }`}
              placeholder="+1 202-555-0136"
              value={formik.values.phone}
              onChange={formik.handleChange}
              {...formik.getFieldProps("phone")}
            />
          </label>
        </div>
      </article>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Shipping info</p>
        <label
          className={`checkout-form__label ${
            formik.touched.address && formik.errors.address ? "error" : ""
          }`}
        >
          Address
          {formik.touched.address && formik.errors.address ? (
            <div className="error-text">{formik.errors.address}</div>
          ) : null}
          <input
            id="address"
            name="address"
            className={`checkout-form__input ${
              formik.touched.address && formik.errors.address
                ? "error-border"
                : ""
            }`}
            placeholder="1137 Williams Avenue"
            {...formik.getFieldProps("address")}
          />
        </label>

        <div className="checkout-form__tablet-wrapper">
          <label
            className={`checkout-form__label ${
              formik.touched.zip_code && formik.errors.zip_code ? "error" : ""
            }`}
          >
            ZIP Code
            {formik.touched.zip_code && formik.errors.zip_code ? (
              <div className="error-text">{formik.errors.zip_code}</div>
            ) : null}
            <input
              id="zip_code"
              name="zip_code"
              className={`checkout-form__input ${
                formik.touched.zip_code && formik.errors.zip_code
                  ? "error-border"
                  : ""
              }`}
              placeholder="10001"
              {...formik.getFieldProps("zip_code")}
            />
          </label>

          <label
            className={`checkout-form__label ${
              formik.touched.city && formik.errors.city ? "error" : ""
            }`}
          >
            City
            {formik.touched.city && formik.errors.city ? (
              <div className="error-text">{formik.errors.city}</div>
            ) : null}
            <input
              id="city"
              name="city"
              className={`checkout-form__input ${
                formik.touched.city && formik.errors.city ? "error-border" : ""
              }`}
              placeholder="New York"
              {...formik.getFieldProps("city")}
            />
          </label>
          <label
            className={`checkout-form__label ${
              formik.touched.country && formik.errors.country ? "error" : ""
            }`}
          >
            Country
            {formik.touched.country && formik.errors.country ? (
              <div className="error-text">{formik.errors.country}</div>
            ) : null}
            <input
              id="country"
              name="country"
              className={`checkout-form__input ${
                formik.touched.country && formik.errors.country
                  ? "error-border"
                  : ""
              }`}
              placeholder="United States"
              {...formik.getFieldProps("country")}
            />
          </label>
        </div>
      </article>

      <article className="checkout-form__section">
        <p className="checkout-form__subtitle">Payment details</p>

        <label className="checkout-form__label">
          Payment Method
          <div
            className={`checkout-form__payment-method ${
              paymentMethod === "e-money" ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodClick("e-money")}
          >
            <input
              type="radio"
              name="options"
              id="e-money"
              value="e-money"
              checked={paymentMethod === "e-money"}
              onChange={() => setPaymentMethod("e-money")}
              defaultChecked
            />
            <p>e-Money</p>
          </div>
        </label>
        <div
          className={`checkout-form__payment-method ${
            paymentMethod === "cash" ? "selected" : ""
          }`}
          onClick={() => handlePaymentMethodClick("cash")}
        >
          <input
            type="radio"
            name="options"
            id="cash"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
          />
          <p>Cash on Delivery</p>
        </div>

        {paymentMethod === "e-money" && (
          <div className="checkout-form__tablet-wrapper">
            <label className="checkout-form__label">
              e-Money Number
              <input
                id="emoney_number"
                name="emoney_number"
                className="checkout-form__input"
                placeholder="238521993"
              />
            </label>

            <label className="checkout-form__label">
              e-money PIN
              <input
                id="emoney_pin"
                name="emoney_pin"
                className="checkout-form__input"
                placeholder="6891"
              />
            </label>
          </div>
        )}
      </article>
    </form>
  );
}
