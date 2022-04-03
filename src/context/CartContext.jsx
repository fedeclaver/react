import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
      const prodEnCarrito = cartList.find((prod) => prod.id ===item.id)
      if(prodEnCarrito){       
        const carritoActualizado = cartList.map((prod)=>{
          if (prod.if === item.id) {
            return {...prod,cantidad: item.cantidad + prod.cantidad}
          }else{
            return prod
          }

        })
      setCartList(carritoActualizado)           
      }else{
setCartList([...cartList,item])
      }
   
  };
  const deleteCarrito = () => {
    setCartList([]);
  };
  const isInCart = (id) => {
    return cartList.some((prod) => prod.id === id);
  };

  const deleteOne = (id) => {
    setCartList(cartList.filter((prod)=> prod.id !== id))
  };

const totalAmount = () => {
    return  cartList.reduce((acc, prod) => acc += prod.price * prod.cantidad, 0)
    
}


const cartQuantity = () => {

  return cartList.reduce((acc, prod) => acc += prod.cantidad, 0)

}





  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        isInCart,
        deleteCarrito,
        deleteOne,
        totalAmount,
        cartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
