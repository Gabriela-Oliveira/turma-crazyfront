class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const criarCarro = (marca, modelo, ano) => new Carro(marca, modelo, ano);

// const criarCarro = (marca, modelo, ano) => {
//     return new Carro(marca, modelo, ano)
// };

const carro1 = criarCarro("Toyota", "Corolla", 2020);
const carro2 = criarCarro("Honda", "Civic", 2022);
const carro3 = criarCarro("Ford", "Mustang", 2024);

const listaDeCarros = [carro1, carro2, carro3];

console.log(listaDeCarros);
