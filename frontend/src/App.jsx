import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './oldalak/Home'
import Valasztott from './oldalak/Valasztott'
import './App.css'


function App() {
  

  return (
    <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route index element= {<Home/>}/>
          <Route path='Valasztott' element= {<Valasztott/>}/>       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
