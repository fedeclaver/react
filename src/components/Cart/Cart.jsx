import { useCartContext } from "../../context/CartContext"


function Cart() {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div>
      { cartList.map(product => <li key={product.id}>
                                nombre: {product.name} precio: {product.price} 
                                cantidad: {product.cantidad}
                              </li>) }
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart

