import React from 'react'
import style from './navbar.module.css'
import { Dropdown, Navbar, Container, Button, InputGroup, FormControl } from 'react-bootstrap'
// import '../../index.css'

function Header() {
    return (
        <>
            <div className={style.navbar} />
            <Navbar className="pt-5" style={{ margin: '0 0 5.8%' }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Button className={style.but_back}>
                            <img src="https://i.ibb.co/HDFThwz/Vector-64.png" alt="" />
                        </Button>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Dropdown>
                            <Dropdown.Toggle className={style.but_user} variant="success" id="dropdown-basic">
                                <img src="https://i.ibb.co/C7HFPXt/Vector.png" alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className={style.avatar}>
                                    <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="" width="45px" />
                                </div>
                                <Dropdown.Item href="#/action-1">Cart</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">History</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            {/* <Navbar.Brand href="#home">
                <img width="auto" height="50px" className={style.logo} src={Logo}  alt="logo" />
            </Navbar.Brand>
            <Nav className={style.nav}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Button className={style.button} variant="primary">Sign Up</Button>
            </Nav>
            </Container> */}
            {/* </Navbar> */}
        </>
    )
}

export default Header
