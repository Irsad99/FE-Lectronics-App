import React, { useState } from 'react'
import style from './cardCart.module.css'
import logo from './trash.png'
import min from './min.png'
import plus from './plus.png'
import { Card } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'

function Cards(props) {
    const [num, setNum] = useState(0)

    function incrementCount() {
        setNum(num + 1)
    }

    function decrementCount() {
        if (num === 0) {
            setNum(0)
        } else {
            setNum(num - 1)
        }
    }
    return (
        <Card className={style.parent}>
            <Card.Body className={style.container}>
                <FormCheckInput className={style.checkbox} inline type="checkbox" group="1" />
                <Card.Img className={style.img} variant="top" src={props.img} />
                <div className={style.title}>
                    <Card.Title className={style.title2}>{props.name}</Card.Title>
                    <Card bg={'primary'} style={{ width: '8rem', height: '2rem' }} className={style.cardChild}>
                        <Card.Title className={style.title3}>{props.category}</Card.Title>
                    </Card>
                    <Card.Title className={style.title4}>Rp {props.price}</Card.Title>
                </div>
                <Card.Img className={style.img2} variant="top" src={logo} />
                <div className={style.add}>
                    <Card.Img onClick={incrementCount} className={style.min} variant="top" src={min} />
                    <div className={style.angka}>1</div>
                    <Card.Img onClick={decrementCount} className={style.plus} variant="top" src={plus} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default Cards
