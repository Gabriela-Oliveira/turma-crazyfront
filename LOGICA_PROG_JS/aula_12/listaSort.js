function lista() {
    var nomesOriginal = ["Flamengo", "Botafogo", "Vasco", "Fluminense"];

    console.log(nomesOriginal);

    var nomesCopia = nomesOriginal;

    // spread, for de copiar os dados de um array
    // var nomesCopia = [...nomesOriginal];
    
    nomesCopia.sort();
    
    console.log(nomesOriginal);
    console.log(nomesCopia);
}

lista();