import { useEffect, useState } from 'react'

function Quadrado() {
  const [numero, setNumero] = useState(1);
  const [quadrado, setQuadrado] = useState(1);

  const anterior = () => {
    setNumero(numero - 1);
  }

  const proximo = () => {
    setNumero(numero + 1);
  }

  const quadradoNumero = () => {
    setQuadrado(numero * numero);
  }

//   PARA CRIAÇÃO
//   useEffect(() => {
//     quadradoNumero();
//   })

// PARA EDIÇÃO
  useEffect(() => {
    quadradoNumero();
  },[numero])

  // PARA DESTRUIÇÃO DO COMPONENTE
  useEffect(() => {
    return function desmontar() {
      quadradoNumero();
    }
  })

  return (
    <div>
        <div style={{display: "flex"}}>
            <button onClick={anterior} disabled={numero === 1}>-</button>
            <p>{numero}</p>
            <button onClick={proximo} disabled={numero === 10}>+</button>
        </div>
        <br />
        <p>O quadrado de {numero} é: {quadrado}</p>
    </div>
  )
}

export default Quadrado;
