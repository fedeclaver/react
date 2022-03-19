import React from 'react'
import Item from '../Item/Item'
import Row from 'react-bootstrap/Row';
import  CardGroup  from "react-bootstrap/CardGroup";
function ItemList({ products }) {
   
    return (
        <CardGroup>
            <Row xs={1} md={3} lg = {4} xl = {5}>
            { products.map((prod) => <Item prod= {prod} key={prod.id} />)  }
            </Row>
            </CardGroup>
    )
}

export default ItemList
