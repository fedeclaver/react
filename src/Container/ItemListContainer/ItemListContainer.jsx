import ItemList from "../../Components/ItemList/ItemList";
import { useState, useEffect } from "react";
import { Loading } from '../../Components/Loading/Loading';
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  //const [loading, setLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    async function getAll() {
      
      try {
        const db = getFirestore();
        const queryCollection =  collection(db, 'items')
        const filterQuery = category ? query(queryCollection, where('category', '==', category)) : queryCollection
        const response = await getDocs(filterQuery)
     
        setProducts(response.docs.map( prod => ({ id: prod.id, ...prod.data() }) ));
       // setLoading(false);
      } catch (error) {
        
      }
            
    }

    getAll();





  }, [category]);
  return (
    <div>

 
      <Container fluid>
        <ItemList products={products}/>
      </Container>
         </div>
    
  );
}

export default ItemListContainer;
