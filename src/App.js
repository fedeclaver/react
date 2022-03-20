import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
