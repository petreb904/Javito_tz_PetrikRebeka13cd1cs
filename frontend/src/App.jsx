import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './oldalak/Home'
import Felvettek from './oldalak/Felvettek'
import './App.css'


function App() {
  

  return (
    <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route index element= {<Home/>}/>
          <Route path='Felvettek' element= {<Felvettek/>}/>       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
