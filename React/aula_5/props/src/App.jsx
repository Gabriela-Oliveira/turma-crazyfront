import React from 'react'
import Filme from "./Filme.jsx";
import PropsChildren from "./propsChildren.jsx";
import Doces from './Doces.jsx'

// FORMA ESTÁTICA DE CHAMAR COMPONENTE PASSANDO PROPS
// function App() {

//   return (
//     <div>
//       <Filme genero="Comédia" titulo="O meme do mal"/>
//       <Filme genero="Ação" titulo="Top Gun"/>
//       <Filme genero="Drama" titulo="A paixão de Cristo"/>
//     </div>
//   )
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////

// FORMA DINÂMICA DE CHAMAR COMPONENTE PASSANDO PROPS
// function App() {

//   let filmes = [
//     {genero:"Comédia", titulo:"O meme do mal"},
//     {genero:"Ação", titulo:"Top Gun"},
//     {genero:"Drama", titulo:"A paixão"},
//   ];

//   let componentesFilmes = [];

//   for (const filme of filmes) {
//     componentesFilmes.push(<Filme titulo={filme.titulo} genero={filme.genero}/>)
//   }

//   return componentesFilmes;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////

// PORPS ESPECIAIS / CHILDREN
// function App() {
//   return <PropsChildren>Este é o conteúdo entre tags.</PropsChildren>;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////


// COMPONENTES DE CLASS

// class App extends React.Component{
//   render() {
//     return (
//       <div>
//         <Filme genero="Comédia" titulo="O meme do mal"/>
//         <Filme genero="Ação" titulo="Top Gun"/>
//         <Filme genero="Drama" titulo="A paixão de Cristo"/>
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div>
      <Doces nome="Fini"/>
      <Doces nome="Pé de Muleque"/>
      <Doces nome="Chiclete"/>
      <Doces nome="Bala"/>
    </div>
  )
}

export default App;

