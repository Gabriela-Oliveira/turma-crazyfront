function FilmeFilho(props) {
    props.nomeUsuario("Gabriela");
    
    return (
        <div>
            <p>Filme: <strong>{props.titulo}</strong></p>
            <p>Já assistiu este filme?</p>
            <input  type="checkbox"
                    id="filme"
                    name="filme"
                    checked={props.assistido}
                    onChange={props.filmeAssistidoFunction}/> 
                    {!!props.assistido ? "Sim" : "Não"}
            <p>Você <strong>{props.filmeAssistido}</strong> assistiu o filme <strong>{props.titulo}</strong></p>
        </div>
    )
}

export default FilmeFilho;