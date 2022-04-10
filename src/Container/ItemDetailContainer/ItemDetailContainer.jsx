import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
//import { Loading } from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
 // const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // obtengo datos del mock
   
    async function getById() {

      try {
        const db = getFirestore();
        const item = doc(db, 'items' , id);
        const response = await getDoc(item)
        
        setProduct( { id: response.id, ...response.data()} );
      //  setLoading(false);
      } catch (error) {
        /* Manejo de Errores */
      }
      
    }

    getById();    
  }, [id]);

  return (
  
    
   
      <ItemDetail product={product}   />
    
      
      
  );
}

export default ItemDetailContainer;
