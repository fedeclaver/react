import React from 'react'
import Count from '../ItemCount/ItemCount';

function ItemDetail({product}){
    return (
        <div>
             <div className="row">
             <img src={product.pictureUrl} alt='imagen' />
            <h3>{product.title}</h3>
             </div>
             <div className="row">
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Count initial={0} stock={10} onAdd/>
            <button>Terminar compra</button>
            </div>
        </div>
    )
}

export default ItemDetail