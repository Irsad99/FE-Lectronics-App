import React from 'react'
import style from './navbar.module.css'
import { Dropdown, Navbar, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }

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
                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
