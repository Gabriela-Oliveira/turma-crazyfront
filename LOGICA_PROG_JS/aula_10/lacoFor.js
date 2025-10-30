// function exWhile() {
//     var resposta = prompt("Qual é a sua resposta?");
//     while (resposta === "Feliz Natal!") {
//         contador++
//         // ...
//     }

//     var contador = 0;
//     while (contador <= 5) {
//         contador++
//         // ...
//     }
// }

// function exFor() {
//     for (var contador = 0; contador <= 5; contador++) {
//         // ...
//     }

    
//     /////////////////////////////////////////////////////////////////////////////////////
//     var valorInicial = 5;
//     var valorFinal = 0;
//     for (var contador = valorInicial; contador <= valorFinal; contador--) {
//         // ...
//     }    
// }

function encadeamentoLacoBreak() {
    for (var i = 0; i < 3; i++) {
        console.log("entrou no for de fora: " + i + " vezes!");
        
        for (var j = 0; j < 2; j++) {
            var resposta = prompt("Qual a resposta?");
            if(resposta === "Resposta certa") {
                console.log('Parabéns! Resposta correta');
                break;
            } else {
                console.log("Vacilão");
            }
        }
    }
}

function lacoContinue() {
    for (var i = 0; i < 10; i++) {
        
        if(i === 3) {
            continue;
        }

        console.log("Index = à: " + i);
    }
}
