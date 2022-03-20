import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/mock";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // obtengo datos del mock
    getFetch.then((response) => setProduct(response.find((resp) => resp.id === id))).catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
