import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Products from './pages/products/products'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
