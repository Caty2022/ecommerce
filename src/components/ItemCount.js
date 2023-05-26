import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantify, setQuantify] = useState(initial);

  const increment = () => {
    if (quantify < stock) {
      setQuantify(quantify + 1);
    }
  };

  const decrement = () => {
    if (quantify > 1) {
      setQuantify(quantify - 1);
    }
  };

  return (
    <div className="counter">
      <button className="boton" onClick={decrement}>
        -
      </button>

      <span>{quantify}</span>

      <button className="boton" onClick={increment}>
        +
      </button>

      <div>
        <button
          className="carrito"
          onClick={() => onAdd(quantify)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
