import { NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
     return (
          <Navbar bg="primary" variant="dark" className="rounded">
               <Container>
                    <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                              <Navbar.Text>
                                   <Nav className="me-auto">
                                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                        <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
                                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                                   </Nav>
                              </Navbar.Text>
                         </Navbar.Collapse>
          </Container>
     </Navbar>
     );
}

export default NavBar;

