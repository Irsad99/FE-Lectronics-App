import React from 'react'
import style from './navbar.module.css'
import { Navbar, Container, Button } from 'react-bootstrap'

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
                        <Button className={style.but_user}>
                            <img src="https://i.ibb.co/C7HFPXt/Vector.png" alt="" />
                        </Button>
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
