import React from "react";

class Email extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: "O Jardim Secreto",
            tipo: "Ação"
        }
    }

    componentDidMount() {
        console.log(this.state.titulo);
        
        this.setState({titulo: "As Branquelas"});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tipo !== this.state.tipo) {
            console.log("Tipo do filme alterado com sucesso!");
            // console.log("prevProps:", prevProps);
            console.log("Tipo anterior:", prevState.tipo);
            console.log("Novo tipo:", this.state.tipo);
        }
    }

    componentWillUnmount() {
        console.log("Desmontagem");
    }

    alterarTipoFime = () => {
        this.setState({tipo: "Comédia"});
    }

    render() {
        return(
            <div>
                <p>Título <strong>{this.state.titulo}</strong></p>
                <button onClick={this.alterarTipoFime}>Modificar o tipo do filme</button>
            </div>
        );
    }
}

export default Email;