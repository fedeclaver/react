import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Widget from "../Widget/Widget";
import logo from "../../logo.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav me-auto">
         
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
            <NavLink  className="nav-item" to="/category/zapatillas"   >Zapatillas</NavLink>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-item" to="/category/remera"     >Remera</NavLink>        
            </li> 
            </ul>   
          </Nav>
          <Nav>           
            <NavLink  activeStyle={{ color: 'white' }} to="/cart">
              <Widget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
