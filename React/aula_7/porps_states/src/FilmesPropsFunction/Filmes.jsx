import React from "react";
import FilmeFilho from './FilmesFilho'

class Filmes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            titulo: "Batman",
            assistido: false,
            filmeAssistido: "nunca",
            nomeUsuario: ""
        }
    }

    filmeAssistido = () => {
        this.setState({
            assistido: !!this.state.assistido ? false : true
        });
        this.setState({
            filmeAssistido: !!this.state.assistido ? "nunca" : "já"
        });
    }

    nomeUsuario = (nome) => {
        this.setState({nomeUsuario: nome})
    }

    render() {
        return (
            <div>
                <p>Nome do usuário: {this.state.nomeUsuario}</p>
                <FilmeFilho 
                    titulo={this.state.titulo} 
                    assistido={this.state.assistido} 
                    filmeAssistido={this.state.filmeAssistido} 
                    filmeAssistidoFunction={this.filmeAssistido}
                    nomeUsuario={this.nomeUsuario}
                />
            </div>
        )
    }
}

export default Filmes
