import { useState } from 'react'

function App() {
  const [numero, setNumero] = useState(5);

  const alterarNumero = () => {
    setNumero(56);
  }

  return (
    <>
      <button onClick={alterarNumero}>Alterar Número</button>
      <p>{numero}</p>
    </>
  )
}

export default App
