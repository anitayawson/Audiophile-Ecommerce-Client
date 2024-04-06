import { useNavigate } from "react-router-dom";
import "./Checkout.scss";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

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
        <CheckoutForm />
        <OrderSummary />
      </div>
    </section>
  );
}
