import React from "react";


import cart from '../../cart.svg';
import { useCartContext } from "../../Context/CartContext";

function Widget(){
    const { cartQuantity } = useCartContext();
// 

return(
  <>
  
     <img src={cart} className="cart" alt="cart" />
     
           
      <span className="mx-2">{cartQuantity()}</span>
    
   
 </>
)

}
export default Widget