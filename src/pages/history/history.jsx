import React from 'react'
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap'
import Header from '../../components/headerAuth/navbar'
import style from './history.module.css'
import CardHistory from '../../components/cardHistory/cardHistory'

function History() {
    return (
        <>
            <Header />
            <div className="head">
                <Container>
                    <InputGroup className="mb-3" style={{ width: '90%', margin: '0 auto' }}>
                        <FormControl className={style.input_search} placeholder="Tap To Search For Something" aria-label="Tap To Search For Something" aria-describedby="basic-addon2" />
                        <Button className={style.btn_search} id="button-addon2">
                            <img src="https://i.ibb.co/PWtqWHZ/Vector.png" alt="" />
                        </Button>
                        <div className={style.but_alt}>
                            <Button className={style.btn_w} style={{ marginLeft: '20px' }}>
                                <img src="https://i.ibb.co/MhwpH7b/Vector.png" alt="" />
                            </Button>
                        </div>
                    </InputGroup>
                    <div className={style.content}>
                        <a className={style.title}>Shopping History</a>
                    </div>
                    <div className={style.content}>
                        <a className={style.date}>February 9, 2022</a>
                        <CardHistory />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default History
