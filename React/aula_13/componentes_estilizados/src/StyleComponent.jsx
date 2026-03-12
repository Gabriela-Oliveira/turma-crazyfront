import { useState } from "react";
import styled from "@emotion/styled";

const Botao = styled.button`
    border: 1px solid chocolate;
    border-radius: 4px;
    padding: 5px;
    font-size: 20px;
    margin: 5px;
    background-color: ${(props) => (props.corFundo)};
    cursor: pointer;

    &:hover {
        background-color: lightcoral;
    }
`;

function StyleComponent() {
    const [contador, setContador] = useState(0);

    const incrementa = () => {
        setContador(contador + 1);
    }

    return(
        <>
            <h1>Exemplo de componentes já estilizados</h1>
            <p>Contador: {contador}</p>
            <Botao onClick={incrementa} corFundo={"lightblue"}>Clique para incrementar!</Botao>
            {/* <button onClick={incrementa}>Clique para incrementar!</button> */}
        </>
    );
}

export default StyleComponent;