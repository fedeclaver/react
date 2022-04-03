import { useCartContext } from "../../context/CartContext";

function Cart() {
  const { cartList, deleteCarrito } = useCartContext();

  return (
    <div>
      {cartList.map((product) => (
        <li key={product.id}>
          nombre: {product.title} precio: {product.price}
          cantidad: {product.cantidad}
        </li>
      ))}
      <button onClick={deleteCarrito}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
