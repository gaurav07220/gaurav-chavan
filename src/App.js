import React from 'react'
import Nav from './components/navbar/Nav'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/pages/home/AppLayout'
import Footer from './components/footer/Footer'
import { MenuProvider } from './context/MenuContext'

const App = () => {
  return (
    <div>
      <MenuProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<AppLayout />} />
        </Routes>
        <Footer />
      </MenuProvider>
    </div>
  )
}

export default App
