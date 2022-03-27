import React from 'react'
import Item from '../Item/Item'
import Row from 'react-bootstrap/Row';

function ItemList({ products }) {
   
    return (
       
            <Row  xs={1} md={3} lg = {4} xl = {5}>
            { products.map((prod) => <Item prod= {prod} key={prod.id} />)  }
            </Row>
        
    )
}

export default ItemList
