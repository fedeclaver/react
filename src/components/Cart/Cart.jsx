
import { Button, Table } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { FaTrash } from 'react-icons/fa';
function Cart() {
  const { cartList, deleteItem, emptyCart, cartQuantity,totalAmount } = useCartContext();

const WidgetList = () => {
  return (
    <>
    {cartList.map((product) => (
  <tr key={product.id}>
<th scope="row" className="border-0">
<div  className="p-2 ">
  <img src={product.pictureUrl} alt="" width="70" className="img-fluid rounded shadow-sm float-right"/>
  <div className="ms-3 d-inline-block align-middle">
    <h5 className="mb-0"> {product.title}</h5>
  </div>
</div>
</th>
<td className="border-0 align-middle">
<strong>{product.price}</strong>
</td>
<td className="border-0 align-middle">
<strong>{product.cantidad}</strong>
</td>
<td className="border-0 align-middle">
<Button variant="outline-dark" onClick={()=> deleteItem(product.id)}><FaTrash color="red" />
</Button>
</td>
</tr>

))}
</>
)
}

const WidgetTotal = () => {
  return (
    <>

<div className="row py-5 p-4 bg-white rounded shadow-sm">
       
<div className="col-lg-12">
  <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Orden de Compra</div>
  <div className="p-4">
    
    <ul className="list-unstyled mb-4">
      <li className="d-flex justify-content-between py-3 border-bottom">
        <strong className="text-muted">Pedido de {cartQuantity()} items</strong>              
      </li>
      <li className="d-flex justify-content-between py-3 border-bottom">
        <strong className="text-muted">Total</strong>
        <h5 className="fw-bold">${totalAmount()}</h5>
      </li>
    </ul>
   
    <Button href="#" className="btn btn-dark rounded-pill py-2 d-md-block">Finalizar Compra</Button>
   
  </div>
</div>
</div>
</>
)
}
  return (
<>

   
             <WidgetList/>
          <Button href="#" onClick={() => emptyCart()}  className="btn btn-dark rounded-pill py-2 d-md-block m-2">Vaciar Carrito</Button>
         
          <WidgetTotal/>


  </>
  );
}

export default Cart;
