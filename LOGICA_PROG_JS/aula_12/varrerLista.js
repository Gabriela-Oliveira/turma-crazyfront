// Verificar se no array inicializado existem os seguintes nomes: "Vovó Mafalda", "Lobo Mal", "Branca de Neve"

function lista() {
    var nomes = ["Papai Noel", "Vovó Mafalda", "Coelinho da Páscoa", "Lobo Mal", "Fada Madrinha"];
    var listaNome = [];
    var posicaoListaNome = [];

    for (var i = 0; i < nomes.length; i++) {
        // console.log(nomes[i]);
        
        if (nomes[i] === "Vovó Mafalda" || nomes[i] === "Lobo Mal" || nomes[i] === "Branca de Neve") {
            listaNome.push(nomes[i]);
            posicaoListaNome.push(nomes[i]);
        }
        
        if (nomes[i] === "Vovó Mafalda") {
            listaNome.push(nomes[i]);
            posicaoListaNome.push(nomes[i]);
            break;
        }
    }

    console.log("lista: " + listaNome);
    console.log("posicaoListaNome: " + posicaoListaNome);
    
}

lista();

// var lista = ["1", "", "2"];

var lista = [];

lista[0] = "1";
lista[2] = "2";