import React from 'react'
import Nav from './components/navbar/Nav'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/pages/home/AppLayout'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<AppLayout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
