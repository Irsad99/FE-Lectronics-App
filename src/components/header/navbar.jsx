import React from 'react'
import style from './navbar.module.css'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import Logo from './Logo2.png'

function Header() {
    return (
        <>
        <Navbar className={style.navbar} variant="light">
            <Container>
            <Navbar.Brand href="#home">
                <img width="auto" height="50px" className={style.logo} src={Logo}  alt="logo" />
            </Navbar.Brand>
            <Nav className={style.nav}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Button className={style.button} variant="primary">Sign Up</Button>
            </Nav>
            </Container>
        </Navbar>
        </>
    )   
}

export default Header