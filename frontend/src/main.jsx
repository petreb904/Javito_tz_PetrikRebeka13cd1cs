import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from "react-router-dom"
import 'tachyons'
import 'axios'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
