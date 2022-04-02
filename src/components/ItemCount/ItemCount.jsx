import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";
function ItemCount({ initial, stock, onAdd }) {
  const [contador, setcont] = useState(initial);

  const Sumar = () => {
    if (contador < stock) {
      setcont(contador + 1);
    }
  };

  const Restar = () => {
    if (contador > initial) {
      setcont(contador - 1);
    }
  };

  const agregar = () => {
    onAdd(contador);
  };

  return (
    <div className="countcontainer m-2">
      <div className="col item">
        <Button className="btn btn-info btn-sm" onClick={Sumar}>
          +
        </Button>
      </div>
      <div className="col item">{contador}</div>
      <div className="col item">
        <Button className="btn btn-danger btn-sm" onClick={Restar}>
          -
        </Button>
      </div>
      <div className="col item">
        <Button className="outline-primary" onClick={agregar}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
