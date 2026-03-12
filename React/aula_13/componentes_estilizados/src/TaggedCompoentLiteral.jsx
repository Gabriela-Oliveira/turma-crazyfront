function tagSimples(textos, valor1, valor2) {
    console.log("Textos", textos);
    console.log("Valor 1", valor1);
    console.log("Valor 2", valor2);
    
    return `${textos[0]}${valor1}${textos[1]}${valor2}${textos[2]}`;
}

function TaggedCompoentLiteral() {
    const nome = "João";
    const idade = 25;

    // const resultado = tagSimples(['olá', 'oi'], 12, 33);
    const resultado = tagSimples`Meu nome é ${nome} e eu tenho ${idade} anos.`;

    return(
        <>
            <div>
                <h1>Tagged Tamplate Function no React</h1>
                <p>{resultado}</p>
            </div>
        </>
    );
}

export default TaggedCompoentLiteral;