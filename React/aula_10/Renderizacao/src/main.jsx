import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Comida from './comida/Comida'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comida />
  </StrictMode>,
)
