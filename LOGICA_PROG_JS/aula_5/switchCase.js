// de/para

// escolha (valor) {
//     caso literal;
//     <executar a instrução>
// }

// var fruta = "🍉"
// switch (fruta) {
//     case "🍍": console.log("O chá da casca e da fruta é muito bom!");
//         break;
//     case "🥝": console.log("Faça uma caipivodka!");
//         break;
//     case "🍊" , "🍉": console.log("Laranja e Melancia são frutas refrescantes!");
//         break;
//     default: console.log("Hoje não temos a fruta selecionada... Foi mal aewww!")
// }

function estadoNome() {
    // var estado = prompt("Digite a sigla do seu estado: ");
    var estado = "MG";
    var nomeEstado;

    switch (estado) {
        case "SP":
            nomeEstado = "São Paulo"
            break;
        case "RJ":
            nomeEstado = "Rio de Janeiro"
            break;

        default: nomeEstado = "não registrado!"
            break;
    }

    console.log("O seu estado: " + nomeEstado);
    
}

estadoNome();