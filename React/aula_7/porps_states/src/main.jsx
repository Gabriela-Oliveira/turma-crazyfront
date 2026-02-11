import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './exemploPropsState/App.jsx'
// import Filmes from './Filmes/Filmes'
import Filmes from './FilmesPropsFunction/Filmes'
// import SetObj from './SetObj'
// import SetArray from './SetArray'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Filmes />
    {/* <SetObj /> */}
    {/* <SetArray /> */}
  </StrictMode>,
)
