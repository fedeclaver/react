
import './App.css';
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Container/ItemListContainer';
import Count from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className='App'>
    <NavBar/>
    <ItemListContainer saludo = 'Bienvenido!! '/>
    <Count initial={0} stock={10} onAdd/>
    </div>
  );
}

export default App;
