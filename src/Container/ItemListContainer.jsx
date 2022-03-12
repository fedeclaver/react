
import ItemList from '../components/ItemList/ItemList';
import { useState, useEffect } from 'react'
import {getFetch} from '../helpers/mock'
import  Container  from "react-bootstrap/Container";
function ItemListContainer({greeting} ) {
  const [productos, setProductos] = useState([])
    useEffect(() => {
        // obtengo datos del mock
        getFetch    
        .then(response => setProductos(response))
        .catch(error => console.log(error))   
    }, [])
  return (
   <div>
    {greeting} ,
    <Container fluid>
    <ItemList productos={productos} />
    </Container></div>
  )
}


export default ItemListContainer
