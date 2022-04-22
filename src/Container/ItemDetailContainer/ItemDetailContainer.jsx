import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";
import { Card, Container, Row, Spinner } from "react-bootstrap";

function ItemDetailContainer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // obtengo datos del mock

    async function getById() {
      try {
        const db = getFirestore();
        const item = doc(db, "items", id);
        const response = await getDoc(item);

        setProduct({ id: response.id, ...response.data() });
        setLoading(false);
      } catch (error) {
        /* Manejo de Errores */
      }
    }

    getById();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row className="justify-content-center">
          <Card style={{ width: "48rem" }}>
            <ItemDetail product={product} />
          </Card>
        </Row>
      )}
    </Container>
  );
}

export default ItemDetailContainer;
