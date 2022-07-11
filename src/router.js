import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import MyProfile from './pages/myprofile/myprofile'
import Products from './pages/products/products'
import Register from './pages/register/register'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/me" element={<MyProfile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
