import "./QuantitySelector.scss";

export default function QuantitySelector({ quantity, setQuantity }) {
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-btn" onClick={decrementQuantity}>
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button className="quantity-btn" onClick={incrementQuantity}>
        +
      </button>
    </div>
  );
}
