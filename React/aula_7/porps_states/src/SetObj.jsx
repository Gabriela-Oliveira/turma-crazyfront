import React from "react";

class SetObj extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carro: {
                marca: "VW",
                modelo: "Gol"
            }
        };
    }

    alterarCarro = () => {
        this.setState({carro: {...this.state.carro, marca: "Fiat"}});
    } 

    // alterarCarro = () => {
    //     this.setState((state) => ({carro: {...state.carro, marca: "Fiat"}}));
    // } 

    render() {
        return(
            <div>
                <button onClick={this.alterarCarro}>Alterar</button>
                <p>Marca: {this.state.carro.marca}</p>
                <p>Modelo: {this.state.carro.modelo}</p>
            </div>
        );
    }
}

export default SetObj;