import { useState, useEffect } from 'react'
import { getFetchprod } from '../../helpers/mock'
import ItemDetail from '../../components/ItemDetail/ItemDetail'


function ItemDetailContainer() {
  const [product, setProduct] = useState([])
    useEffect(() => {
        // obtengo datos del mock
        getFetchprod    
        .then(response => setProduct(response))
        .catch(error => console.log(error))   
    }, [])
   
  return (
   <div>
 
 <ItemDetail  product={product} />


  </div>
  )
}


export default ItemDetailContainer
