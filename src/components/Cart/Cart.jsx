
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { FaTrash } from 'react-icons/fa';
function Cart() {
  const { cartList, deleteItem, emptyCart, totalAmount } = useCartContext();

  return (

    <div classname="cart">
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row">
          <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <div className="table-responsive">
              <div>
                
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Producto</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Precio</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Cantidad</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Eliminar</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
          
                      {cartList.map((product) => (
                        <tr>
                    <th scope="row" class="border-0">
                      <div key={product.id} class="p-2">
                        <img src={product.pictureUrl} alt="" width="70" className="img-fluid rounded shadow-sm"/>
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
                    </tbody>
              </table>
            </div>
          </div>
          <Button onClick={emptyCart} className="btn btn-dark rounded-pill py-2 d-md-block">Vaciar Carrito</Button>
        </div>
        <div className="row py-5 p-4 bg-white rounded shadow-sm">
         
          <div className="col-lg-12">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Orden de Compra</div>
            <div className="p-4">
              
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Subtotal</strong>              
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>
                  <h5 className="fw-bold">{totalAmount}</h5>
                </li>
              </ul>
              <Button href="#" className="btn btn-dark rounded-pill py-2 d-md-block">Finalizar Compra</Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>


  );
}

export default Cart;
