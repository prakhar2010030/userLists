import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tuples</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Add</Nav.Link>
            <Nav.Link href="#pricing">Delete</Nav.Link>
            <NavDropdown title="Authentication" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Github</NavDropdown.Item>
          
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
