import React from 'react'
import { Button, Card } from 'react-bootstrap'
import style from './cardHistory.module.css'

function CardHistory() {
    return (
        <>
            <Card className={style.card}>
                <div className={style.content_wrapper}>
                    <div className={style.left}>
                        <img
                            className={style.img}
                            width="156px"
                            height="156px"
                            src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1"
                        />
                        <div className={style.details}>
                            <a className={style.category}>Headphone</a>
                            <div className={style.name}>Sony MDR-5706</div>
                            <a className={style.quantity}>1 Item</a>
                            <a className={style.price}>$3000</a>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.opx}>
                            <a className={style.label_price}>Total</a>
                            <a className={style.total_price}>$3000</a>
                        </div>
                        <div className={style.button}>
                            <Button className={style.but_details}>Details</Button>
                            <Button className={style.but_reviews}>Reviews</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}
export default CardHistory
