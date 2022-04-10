
import { Button } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";
import { FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from "firebase/firestore";
function Cart() {
  const { cartList, deleteItem, emptyCart, cartQuantity, totalAmount } = useCartContext();
  const [dataForm , setDataForm ] = useState({email: '',name: '',phone: ''});
  const [idOrder, setIdOrden] = useState('');



  const setOrder = async (e) => {
    e.preventDefault()   
     // New Objet order  
    let order = {}
    order.date = Timestamp.fromDate(new Date()) 
    order.buyer = dataForm 
    order.total = totalAmount();
    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad      
      return {id, nombre, precio, cantidad}  
  }) 
        
    // guardar la orden en firestore
    const db = getFirestore()

    const oredenCollection = collection(db, 'ordenes')
    await addDoc(oredenCollection, order) // setDoc
    .then(resp => setIdOrden(resp.id))
    .catch(err => console.log(err))        

    // actualizar stock
    const queryCollection = collection(db, 'items')

    //console.log(cleccionNoti)
    const queryActulizarStock = query(
        queryCollection, 
        where( documentId() , 'in', cartList.map(it => it.id))          
    ) 

    const batch = writeBatch(db)       
    
    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) 
    ))
    .catch(err => console.log(err))
    .finally(()=> console.log('stock actualizado'))
    batch.commit()
  
}

function handleChange(e) {    
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}
console.log(dataForm)
  const WidgetList = () => {
    return (
      <>   <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="border-0 bg-light">
              <div className="p-2 px-3 text-uppercase">Product</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Price</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Quantity</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Remove</div>
            </th>
          </tr>
        </thead>
        <tbody>
        {cartList.map((product) => (
          <tr key={product} >
            <th scope="row">
              <div className="d-flex p-2">
                <img src={product.pictureUrl} alt="" width="70" className="img-fluid rounded shadow-sm"/>
                <div className="m-3 d-inline-block align-middle">
                  <h5 className="mb-0 text-dark d-inline-block align-middle">{product.title}</h5>
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
              <Button variant="outline-dark" onClick={() => deleteItem(product.id)}><FaTrash color="red" />
              </Button>
            </td>
          </tr>
        )
        )} </tbody></table>
        </div>
      </>
    )
  }
  const WidgetTotal = () => {
    return (
      <>    
        <div className="row py-5 p-4 bg-white rounded shadow-sm">      
          <div className="col-lg-6">
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
            </div>
          </div>
          <div className="col-lg-6">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Ingresar Datos</div>
          <div className="p-4">
                  <form onSubmit={setOrder}>                    
                  <input type='text' class="form-control border-0" name='name' placeholder='name' onChange={handleChange} value={dataForm.name}/> 
                  <br/>
                  <input type='text' class="form-control border-0" name='phone' placeholder='tel' onChange={handleChange} value={dataForm.phone}/>        
                  <br/>
                  <input type='email'class="form-control border-0"  name='email' placeholder='email' onChange={handleChange} value={dataForm.email}/>
                  <br/>
                  <Button href="#" className="btn btn-dark rounded-pill py-2 d-md-block" >Finalizar Compra</Button>
                </form>        
        </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
  <div className="pb-5">
<div className="container">
<div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
      <WidgetList />
      <Button href="#" onClick={() => emptyCart()} className="btn btn-dark rounded-pill py-2 d-md-block m-2">Vaciar Carrito</Button>
      <WidgetTotal />
      </div>
      </div>      
      </div>
    </>
  );
}

export default Cart;
