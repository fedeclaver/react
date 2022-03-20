import ItemList from "../../components/ItemList/ItemList";
import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/mock";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id === undefined) {
      // obtengo datos del mock
      getFetch.then((response) => setProducts(response)).catch((error) => console.log(error));
    } else {
      getFetch.then((response) => setProducts(response.filter((resp) => resp.category === id))).catch((error) => console.log(error));
    }
  }, [id]);
  return (
    <div>
      {greeting} ,
      <Container fluid>
        <ItemList products={products} />
      </Container>
    </div>
  );
}

export default ItemListContainer;
