import { useState } from "react";
import "./QuantitySelector.scss";

export default function QuantitySelector({
  quantity,
  setQuantity,
  removeZero = false,
}) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const incrementQuantity = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
    setQuantity(newQuantity);
  };

  const decrementQuantity = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setCurrentQuantity(newQuantity);
      setQuantity(newQuantity);
    } else if (removeZero) {
      setQuantity(0);
    }
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-btn" onClick={decrementQuantity}>
        -
      </button>
      <span className="quantity-display">{currentQuantity}</span>
      <button className="quantity-btn" onClick={incrementQuantity}>
        +
      </button>
    </div>
  );
}
