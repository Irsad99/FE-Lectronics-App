import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import style from './card.module.css'

function Cards() {
    return (
        <>
            <Container>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.body_one}>
                            <Card.Title>Sennheiser HD-25</Card.Title>
                            <a>TETETETE</a>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default Cards
