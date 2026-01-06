const texto = `posso escrever
        um texto
com quebra de linha.`

console.log(texto);

////////////////////////////////////////

const soma = `Soma: ${2 + 2}`;

console.log(soma);

////////////////////////////////////////

const nome = "Maria"
const dizer = `Eu te amo ${nome}`;
// const soma1 = "Eu te amo " + nome

////////////////////////////////////////

const hora = 20;
const frase = `Tenha uma boa ${(() => {
    // if (hora > 18){
    //     return "noite";
    // } else {
    //     return "tarde"
    // }
    return hora > 18 ? "noite" : "tarde";
})()}`

console.log(frase);

