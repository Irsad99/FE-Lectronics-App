import React from 'react'
import style from './navbar_new.module.css'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import Logo from './Logo2.png'

function Navbar_New() {
    return (
        <>
        <Navbar className={style.navbar} variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img width="auto" height="50px" className={style.logo} src={Logo}  alt="logo" />
                </Navbar.Brand>
                <Nav className={style.nav}>
                    <Nav.Link href="/" className={style.navbar2}>Home</Nav.Link>
                    <Nav.Link href="/products" className={style.navbar2}>Products</Nav.Link>
                    <Nav.Link href="#community" className={style.navbar2}>Community</Nav.Link>
                    <Nav.Link href="#About" className={style.navbar2}>About</Nav.Link>
                    <Button href="/login" className={style.button} variant="primary">Sign Up</Button>
                </Nav>
            </Container>
        </Navbar>
        </>
    ) 
}

export default Navbar_New