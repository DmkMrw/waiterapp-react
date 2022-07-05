import { NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
     return (
          <Navbar bg="primary" variant="dark" className="rounded mb-5">
               <Container>
                    <Nav.Link as={NavLink} to="/"><Navbar.Brand>Waiter.app</Navbar.Brand></Nav.Link>
                    <Navbar.Collapse className="justify-content-end">
                              <Navbar.Text>
                                   <Nav className="me-auto">
                                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                   </Nav>
                              </Navbar.Text>
                         </Navbar.Collapse>
          </Container>
     </Navbar>
     );
}

export default NavBar;

