import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx';
import Sobre from './Sobre.jsx';
import Usuario from './Usuario.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}> 
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/usuario' element={<Usuario />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
