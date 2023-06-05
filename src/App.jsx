import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Users from './pages/Users'
import Vision from './pages/Vision'
import Mision from './pages/Mision'

const App = () => {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/users/:user/type/:type' element={<Users />} />
            <Route path='/users/:user' element={<Users />} />
            <Route path='/about' element={<About />}>
                <Route index element={<Vision />} />
                <Route path="vision" element={<Vision />} />
                <Route path="mision" element={<Mision />} />
            </Route>
            <Route path="/" element={<Home />} /> 
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

/* 

/        => Home
/about   => About
/contact => Contact
/price   => Price

*/