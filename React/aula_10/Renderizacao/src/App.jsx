import React, { useEffect, useState } from "react";

function App() {
  const [pessoa, setPessoa] = useState([]);
  const [pessoa1, setPessoa1] = useState("");

  function cadastroPessoa(evento) {
    evento.preventDefault();

    setPessoa(() => [
      ...pessoa,
      evento.target.nome.value
    ]);
  }

  // useEffect(() => {
  //   console.log(pessoa);
  // }, [pessoa]);

  function adicionaPessoa(evento) {
    evento.preventDefault();

    setPessoa1(() => evento.target.value);
  }

  useEffect(() => {
    console.log(pessoa1);
  }, [pessoa1]);

  return (
    <>
      <div className="cadastro-pessoa">
        <form onSubmit={cadastroPessoa}>
          <label htmlFor="nome">Digite seu nome</label><br/>
          <input type="text" id="nome" name="nome"/> <br/><br/>

          <button type="submit">Cadastrar Pessoa</button>
        </form><br/><br/>

          <label htmlFor="nome">Digite seu nome PESSOA</label><br/>
          <input type="text" id="nome" value={pessoa1} onChange={adicionaPessoa}/> <br/><br/>
      </div>
    </>
  )
}

export default App
