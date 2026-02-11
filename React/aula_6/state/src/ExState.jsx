import React from "react";

class ExState extends React.Component{
//   nome = 'Gabriela';

    constructor(props){
        super(props)

        this.state = {
            nome: 'Gabriela'
        }
    }

    alterarNome = () => {
        console.log('Antes: ' + this.state.nome);
        
        // this.nome = 'Thaís';
        this.setState({ nome: 'Thaís' });

        setTimeout(() => {
            console.log('Depois: ' + this.state.nome);
        }, 1000);
    }

    render = () => {
        return(
        <div>
            <button onClick={this.alterarNome}>Alterar nome</button>
            <p>
                {this.state.nome}
            </p>
        </div>
        )
    }
}

export default ExState;
