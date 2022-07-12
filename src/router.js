import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Notife from './pages/notife/notife'
import Checkout from './pages/checkout/checkout'
import Products from './pages/products/products'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/notif" element={<Notife />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
