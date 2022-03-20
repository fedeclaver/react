
import { useState, useEffect } from 'react'
import {getFetch} from '../../helpers/mock'
import ItemDetail from '../../components/ItemDetail/ItemDetail'


function ItemDetailContainer() {
  const [product, setProduct] = useState([])
    useEffect(() => {
        // obtengo datos del mock
        getFetch    
        .then(response => setProduct(response.filter( prod=> prod.id === "1")))
        .catch(error => console.log(error))  
    }, [])
   
  return (
   <div>
 
 <ItemDetail  product={product} />


  </div>
  )
}


export default ItemDetailContainer
