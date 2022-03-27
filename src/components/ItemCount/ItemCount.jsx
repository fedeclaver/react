import { useState } from "react";
import './ItemCount.css';
function ItemCount({initial, stock, onAdd}) {
  const [contador, setcont] = useState(initial);

  const Sumar=()=>{
    if (contador < stock) {
      setcont(contador + 1)
    }
  }
  
  const Restar=()=>{    
    if (contador > initial) {
      setcont(contador - 1)
    }
  }

  const agregar=()=>{
    onAdd(contador)
  }

  return (
          <div className="countcontainer m-2">
        <div className="col item">
        <button className="btn btn-info btn-sm" onClick={Sumar}>
              +
          </button>
          </div>
          <div className="col item">
          { contador }
          </div>
          <div className="col item">
          <button className="btn btn-danger btn-sm"  onClick={Restar}>
              -
          </button>
          </div>
          <div className="col item">
        <button className="btn btn-outline-primary btn-block" onClick={agregar} >       
            Agregar al carrito
        </button>

        </div>
      </div>
     




  )
}




export default ItemCount;
