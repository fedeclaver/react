import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

import Count from "../ItemCount/ItemCount";
import { useState } from "react";

function ItemDetail({ product , loading, setLoading}) {
const { cartList , addToCart  } =useCartContext();
const [ contador , setCont ] = useState(0);


const onAdd = (contador) => {     

  addToCart( { ...product, cantidad: contador }  )

  setCont(contador);
  setLoading(false)
  }
   
    console.log(contador)
    console.log(cartList)
  return (
    <div>
      <img src={product.pictureUrl} alt="imagen" />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
   {contador === 0 ? 
      <Count initial={0} stock={10} onAdd={onAdd}/> 
      : 
      <> 
      <Link to='/cart'><Button variant="success">Success</Button></Link> 
      <Link to='/'><Button variant="secondary">seguir comprando</Button></Link>   
       </>}  
    </div>
  );
}

export default ItemDetail;

