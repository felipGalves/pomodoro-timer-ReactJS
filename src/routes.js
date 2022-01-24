import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Page components
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}