import React from "react";
import { Badge } from "react-bootstrap";

import cart from '../../cart.svg';
import { useCartContext } from "../../context/CartContext";

function Widget(){
    const { count,cartList } = useCartContext();

    const condition = cartList.length > 0
    const Count = () => {
        return (
          <div className='flex flex-row'>
                 <Badge color="secondary" badgeContent={count}></Badge>
    
            </div>
        )
      }



return(
   <>
<div>
    <img src={cart} className="cart" alt="cart" /> 
    {condition &&<Count/>}
    
    </div>
   </>
)

}
export default Widget