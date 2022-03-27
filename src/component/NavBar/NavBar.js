import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { useState } from 'react';
function NavGeneral({raiz="",routes=[]}) {

    const [showmongo, setShowMongo] = useState(false);
    const [showredis, setShowRedis] = useState(false);
    const [showtidis, setShowTidis] = useState(false);

    const showDropdownMongo = (e)=>{
        setShowMongo(!showmongo);
    }
    const hideDropdownMongo = e => {
        setShowMongo(false);
    }

    const showDropdownRedis = (e)=>{
        setShowRedis(!showredis);
    }
    const hideDropdownRedis= e => {
        setShowRedis(false);
    }

    const showDropdownTidis= (e)=>{
        setShowTidis(!showtidis);
    }
    const hideDropdownTidis= e => {
        setShowTidis(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand  href={`/`}>
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
                <NavDropdown 
                title={
                    <div className="pull-left" style={{display:'inline',fontSize:'1.2rem'}}>
                        <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/2048px-Antu_mongodb.svg.png"
                        width="20"
                        height="20"
                        roundedCircle
                        className="d-inline-block align-top"
                        style={{margin: '0.3rem'}}
                        />
                        {"Mongo"}
                    </div>
                } 
                id="collasible-nav-dropdown"
                show={showmongo}
                onMouseEnter={showDropdownMongo} 
                onMouseLeave={hideDropdownMongo}
                href="/mongo"
                >
                    <NavDropdown.Item href="/mongo/logs">Logs</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/mongo/topthree">Top Three</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/mongo/suscriber">Suscribers</NavDropdown.Item>  
                </NavDropdown>
                <NavDropdown 
                title={
                    <div className="pull-left" style={{display:'inline',fontSize:'1.2rem'}}>
                        <img
                        alt=""
                        src="https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/17/cd/a2/17cda2a0-b641-c3d0-3d22-141704a40eef/Icon.png/1200x630bb.png"
                        width="20"
                        height="20"
                        roundedCircle
                        className="d-inline-block align-top"
                        style={{margin: '0.3rem'}}
                        />
                        {"Redis"}
                    </div>
                } 
                id="collasible-nav-dropdown"
                show={showredis}
                onMouseEnter={showDropdownRedis} 
                onMouseLeave={hideDropdownRedis}
                >
                    <NavDropdown.Item href="/redis/topteengames">Top Teen Games</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/redis/topteenplayers">Top Teen Players</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/redis/statistics">Statistics</NavDropdown.Item>  
                </NavDropdown>
                <NavDropdown 
                title={
                    <div className="pull-left" style={{display:'inline',fontSize:'1.2rem'}}>
                        <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7TSy-GKHwjCSnh7r35Oe7e2LWpdZ8P4NKxWe9lpqYItBGWGfhRt5kxLUDG9JLLwae90&usqp=CAU"
                        width="20"
                        height="20"
                        roundedCircle
                        className="d-inline-block align-top"
                        style={{margin: '0.3rem'}}
                        />
                        {"TiDB"}
                    </div>
                } 
                id="collasible-nav-dropdown"
                show={showtidis}
                onMouseEnter={showDropdownTidis} 
                onMouseLeave={hideDropdownTidis}
                >
                    <NavDropdown.Item href="/tidis/topteengames">Top Teen Games</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/tidis/topteenplayers">Top Teen Players</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/tidis/statistics">Statistics</NavDropdown.Item>  
                </NavDropdown>
            </Nav>
            </Container>
        </Navbar>
    );
  }
  
  export default NavGeneral;
  