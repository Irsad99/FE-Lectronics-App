import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router