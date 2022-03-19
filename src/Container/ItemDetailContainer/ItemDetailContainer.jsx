
import { useState, useEffect } from 'react'
import {getFetch} from '../../helpers/mock'
import ItemDetail from '../../components/ItemDetail/ItemDetail'


function ItemDetailContainer() {
  const [producto, setProduct] = useState([])
    useEffect(() => {
        // obtengo datos del mock
        getFetch    
        .then(response => setProduct(response => response.id === "1"))
        .catch(error => console.log(error))  
    }, [])
   
  return (
   <div>
 
 <ItemDetail  product={producto} />


  </div>
  )
}


export default ItemDetailContainer
