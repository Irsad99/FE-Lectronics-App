import React from 'react'
import style from './products.module.css'
import { Container, InputGroup, FormControl, Button, Pagination } from 'react-bootstrap'
import Header from '../../components/header/navbar'
import Cards from '../../components/card/card'
import Footer from '../../components/footer/footer'

function Products() {
    return (
        <>
            <Header />
            <Container style={{ maxWidth: '57%' }}>
            <div className="head">
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
            </div>
            <div className={style.btn_gr}>
                <a href="/#" className={style.label_cat} id={style.active}>
                    Headphone
                </a>
                <a href="/#" className={style.label_cat}>
                    Air Conditioner
                </a>
                <a href="/#" className={style.label_cat}>
                    Router
                </a>
            </div>
                <Cards title={'Sennheiser HD-25'} price={'$3000'} rating={4.9}/>
                <Cards title={'Sennheiser HD-25'} price={'$3000'} rating={4.9}/>

            <Pagination itemclassName="page-item" linkclassName="page-link" className={style.pagination}>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>
                <Pagination.Item>{7}</Pagination.Item>
                <Pagination.Item>{8}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
            </Container>
            <Footer />
        </>
    )
}

export default Products
