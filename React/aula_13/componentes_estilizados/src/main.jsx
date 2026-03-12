import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Inverter from './Inverter.jsx'
import StyleComponent from './StyleComponent.jsx'
import TaggedCompoentLiteral from './TaggedCompoentLiteral.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Inverter /> */}
    {/* <StyleComponent /> */}
    <TaggedCompoentLiteral />
  </StrictMode>,
)
