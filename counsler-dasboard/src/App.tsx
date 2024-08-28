import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard/dashboard'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />  
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App