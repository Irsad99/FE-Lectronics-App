import React from 'react'
import { Card, Button } from 'react-bootstrap'
import style from './card.module.css'
import '../../index.css'
import {Link, useNavigate} from 'react-router-dom'

function Cards(props) {
    const navigasi = useNavigate()

    const goto = () => {
        navigasi(`detail/${props.id}`)
    }
    return (
        <>
            <Card className={style.card}>
                <Card.Body className={style.body_ut}>
                    <div className={style.title}>
                        <Link to={`detail/${props.id}`} className={style.card_name}>
                            {props.name}
                        </Link>
                    </div>
                    <div className={style.detail}>
                        <div>
                            <a className={style.card_price}>Rp {props.price}</a>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                            <a className={style.card_rate}>4.9</a>
                        </div>
                    </div>
                </Card.Body>
                <div style={{ padding: '27px', margin: '-140px 0px' }}>
                    <Card.Img variant="top" height="277px" width="255px" src={props.img} />
                    <Card.Body style={{ display: 'flex' }}>
                        <Button className={style.but_detail} style={{ width: '100%' }} onClick={goto}>
                            Detail
                        </Button>
                        <Button className={style.but_cart}>
                            <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                        </Button>
                    </Card.Body>
                </div>
            </Card>
        </>
    )
}

export default Cards
