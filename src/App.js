import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:category" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
