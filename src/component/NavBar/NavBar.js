import {Navbar,Nav,Container} from 'react-bootstrap'

function NavGeneral({raiz="",routes=[]}) {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            USAC Squid Game
            </Navbar.Brand>
            <Nav className="me-auto">
                {
                    routes.map((ruta)=>
                        <Nav.Link href={`${raiz}/${ruta}`}>{ ruta.toUpperCase() }</Nav.Link>
                    )
                }
            </Nav>
            </Container>
        </Navbar>
    );
  }
  
  export default NavGeneral;
  