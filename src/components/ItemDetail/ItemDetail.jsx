import React from "react";
import Count from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  return (
    <div>
     
  
             <img src={product[0].pictureUrl} alt='imagen' />
            <h3>{product[0].title}</h3>
      
            <p>{product[0].price}</p>
            <p>{product[0].description}</p>
            <Count initial={0} stock={10} onAdd/>
            <button>Terminar compra</button>
          
        </div>
    );


}

export default ItemDetail;
