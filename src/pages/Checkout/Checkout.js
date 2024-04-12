import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.scss";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { Modal } from "@mui/material";
import OrderConfirmationModal from "../../components/OrderConfirmationModal/OrderConfirmationModal";

export default function Checkout() {
  const checkoutModalRef = useRef(null);
  const navigate = useNavigate();

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const navigateBack = () => {
    navigate(-1);
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const handleCloseCheckoutModal = () => {
    setShowCheckoutModal(false);
  };

  return (
    <section>
      <div className="nav-bg"></div>
      <div className="checkout">
        <p onClick={navigateBack} className="checkout__back-btn">
          Go Back
        </p>
        <div className="checkout__desktop-wrapper">
          <CheckoutForm />
          <OrderSummary handleCheckout={handleCheckout} cartItems={cartItems} />
        </div>
      </div>
      <Modal
        open={showCheckoutModal}
        onClose={handleCloseCheckoutModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="confirmation-modal-container"
      >
        <OrderConfirmationModal ref={checkoutModalRef} />
      </Modal>
    </section>
  );
}
