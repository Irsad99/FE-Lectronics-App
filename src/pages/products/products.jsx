import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import withAuth from '../../helpers/withAuth'

import style from './products.module.css'
import Header from '../../components/headerAuth/navbar'
import Cards from '../../components/card/card'
import Footer from '../../components/footer/footer'
import useApi from '../../helpers/useApi'
import Search from '../../components/search/search'
import Paginations from '../../components/pagination/pagination'
import Menus from '../../components/menuCategory/menuCategory'

function Products() {
    const [products, setProducts] = useState([])

    const api = useApi()

    const getProducts = async () => {
        api.requests({
            method: 'GET',
            url: '/product/',
        })
            .then((res) => {
                const { data } = res.data
                setProducts(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <Header />
            <Container style={{ maxWidth: '64%' }}>
                <Search />
                <Menus />
                <div className={style.cardCont} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8%', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {products.map((v) => {
                        return <Cards key={v.id_product} id={v.id_product} name={v.name} img={v.image} price={v.price} />
                    })}
                </div>
                <Paginations />
            </Container>
            <Footer />
        </>
    )
}

export default withAuth(Products)
