import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext =() => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{
        if(isInCart(item.id)){
            const prod = cartList.find((p) => p.id === item.id)
            const { cantidad } = prod
            prod.cantidad = item.cantidad + cantidad
            const newCart = [ ...cartList ]
            setCartList(newCart)

        } else {

            setCartList ( [...cartList, item ])
        }
        
    }
    const vaciarCarrito= () =>{
        setCartList([])
    }
    const isInCart = (id) => {
        return cartList.some((prod) => prod.id === id)  
      }

    return (
        <CartContext.Provider value={{ 
            cartList,
            addToCart,
            isInCart,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider