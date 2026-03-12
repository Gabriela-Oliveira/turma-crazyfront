import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import Sobre from './components/Sobre.jsx'
import Usuario from './components/Usuario.jsx'
import Erro from './components/Erro.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sobre' element={<Sobre/>}></Route>
      <Route path='/usuario' element={<Usuario/>}></Route>
      <Route path='*' element={<Erro/>}></Route>
    </Routes>
  </BrowserRouter>,
)
