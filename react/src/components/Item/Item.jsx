

import React from "react";

import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
function Item(prod){
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl }
return(

    <Card id={prod.prod.id} className="m-2"style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.prod.pictureUrl} />
    <Card.Body>
      <Card.Title>{prod.prod.title}</Card.Title>
      <Card.Text>
      {prod.prod.price}
      </Card.Text>
      
      <Button variant="primary">Detalle</Button>

      
    </Card.Body>
   
  </Card>
 

)

}
export default Item

