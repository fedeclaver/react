import React from 'react'
import Item from '../Item/Item'
import Row from 'react-bootstrap/Row';

function ItemList({ products }) {
   
    return (
       
            <Row  xs={1} md={2} lg = {3} xl = {4}xxl = {5}>
            { products.map((prod) => <Item prod= {prod} key={prod.id} />)  }
            </Row>
        
    )
}

export default ItemList
