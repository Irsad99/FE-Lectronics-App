import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Products from './pages/products/products'
import Detail from './pages/detail/detail'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
