import React from "react";

class Email extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: "O Jardim Secreto",
        }
    }

    componentDidMount() {
        console.log(this.state.titulo);
        
        this.setState({titulo: "As Branquelas"});
    }

    render() {
        return(
            <div>
                <p>Título <strong>{this.state.titulo}</strong></p>
            </div>
        );
    }
}

export default Email;