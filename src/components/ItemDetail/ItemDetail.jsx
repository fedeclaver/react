import React from "react";
import Count from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  return (
    <div>
      <img src={product.pictureUrl} alt="imagen" />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Count initial={0} stock={10} onAdd />
      <button>Terminar compra</button>
    </div>
  );
}

export default ItemDetail;
