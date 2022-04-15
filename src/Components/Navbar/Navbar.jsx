import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Widget from "../Widget/Widget";
import logo from "../../logo.svg";
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
          <Nav className="me-auto">
            <NavLink to="/category/zapatillas"   style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}
          >Zapatillas</NavLink>
            <NavLink to="/category/remera"   style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}
          >Remera</NavLink>           
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
