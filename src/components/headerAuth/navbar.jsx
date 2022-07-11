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

            <div className="head">
                <Container>
                    <InputGroup className="mb-3">
                        <FormControl className={style.input_search} placeholder="Tap To Search For Something" aria-label="Tap To Search For Something" aria-describedby="basic-addon2" />
                        <Button className={style.btn_search} id="button-addon2">
                            <img src="https://i.ibb.co/PWtqWHZ/Vector.png" alt="" />
                        </Button>
                        <div className={style.but_alt}>
                            <Button className={style.btn_w} style={{ margin: '0 20px 0 20px' }}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" />
                            </Button>
                            <Button className={style.btn_w}>
                                <img src="https://i.ibb.co/MhwpH7b/Vector.png" alt="" />
                            </Button>
                        </div>
                    </InputGroup>
                </Container>
            </div>

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
