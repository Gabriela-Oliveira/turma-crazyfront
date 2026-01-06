class Carro {
    constructor(marca, modelo, ano, cor, placa, ligado) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.placa = placa;
        this.ligado = ligado;
    }
}

function listaClass() {
    var fusca = new Carro("Volkswagen", "Fusca", 1978, "Azul calcinha", undefined, false);
    var opala = new Carro("Chevrolet", "Opala SS", 1976, "Amarelo", "ABC-4325", true);
    var golQuadrado = new Carro("Volkswagen", "Gol Quadrado", 1994, "Branca", "CBD-1234", false);
    var unoComEscada = new Carro("Fiat", "Uno", 2010, "Vermelho", "ABC-0000", true);
    var hilux = new Carro("Toyota", "hilux", 2022, "Preto", "AAA-1111", false);

    unoComEscada.escada = true;

    var carros = [];
    
    carros.push(fusca);
    carros.push(opala);
    carros.push(golQuadrado);
    carros.push(unoComEscada);
    carros.push(hilux);

    console.log(carros);
    console.log(carros.length);
}

listaClass();