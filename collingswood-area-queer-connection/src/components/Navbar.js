import {NavBar, Nav, Container, Modal, Tab} from react-bootstrap;

const AppNavBar = () =>{
    return(
        <>
        <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/' className='websiteTitle'>
            Collingswood Area Queer Connection
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ms-auto'>
                  <Nav.Link as={Link} to='/artists'>
                    Artists
                  </Nav.Link>
                  <Nav.Link as={Link} to='/contact'>
                    Contact
                  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavBar;