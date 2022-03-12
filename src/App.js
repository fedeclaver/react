
import './App.css';
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Container/ItemListContainer';

function App() {
  return (
    <div className='App'>
    <NavBar/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
