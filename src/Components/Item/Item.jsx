import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//import { Loading } from "../Loading/Loading";

function Item(prod) {
  return (
    <div> 
     
    <Link to={`/item/${prod.prod.id}`}>
      <Card id={prod.prod.id} className="m-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.prod.pictureUrl} />
        <Card.Body>
          <Card.Title>{prod.prod.title}</Card.Title>
          <Card.Text>{prod.prod.price}</Card.Text>

          <Button variant="primary">Detalle</Button>
        </Card.Body>
      </Card>
    </Link>
   

     </div>
  );
}
export default Item;
