import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'
import Home from './pages/home/home'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router