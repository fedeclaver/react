import { useState } from "react";
import './ItemCount.css';
function ItemCount({initial, stock, onAdd}) {
  const [cont, setcont] = useState(initial);

  const Sumar=()=>{
    if (cont < stock) {
      setcont(cont + 1)
    }
  }
  
  const Restar=()=>{    
    if (cont > initial) {
      setcont(cont - 1)
    }
  }

  return (
          <div className="countcontainer m-2">
        <div className="col item">
        <button className="btn btn-info btn-sm" onClick={Sumar}>
              +
          </button>
          </div>
          <div className="col item">
          { cont }
          </div>
          <div className="col item">
          <button className="btn btn-danger btn-sm"  onClick={Restar}>
              -
          </button>
          </div>
          <div className="col item">
        <button className="btn btn-outline-primary btn-block" onClick={()=> console.log(cont)} >       
            Agregar al carrito
        </button>

        </div>
      </div>
     




  )
}




export default ItemCount;
