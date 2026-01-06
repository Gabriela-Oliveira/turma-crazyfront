function passagemPorReferencia() {
    var fusca = {
        marca: "Volkswagen",
        modelo: "Fusca",
        ano: 1978,
        cor: "Azul calcinha",
        placa: "ABC-1234",
        ligado: false,
    }

    var carro = fusca;

    carro.ligado = true;

    console.log(fusca);
    console.log(carro);
}

passagemPorReferencia();
