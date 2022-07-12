import React from 'react'
import style from './navbar.module.css'
import { Navbar, Container, Button, InputGroup, FormControl } from 'react-bootstrap'

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
        </>
    )
}

export default Header
