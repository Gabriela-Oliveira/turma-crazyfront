
//  quero que vc execute 4 vezes

// {
//     console.log("Olá mundo!");
// }

// console.log('Teste');

// Repetições:
// - Indefinidas
// - Definidas
// - Recursivas
// - Iterativas

// - Indefinidas
// Mto parecido com: if

// var semana = "Domingo";

// if (semana === "Domigo") {
//     console.log("Partiu clube");
// }

var contador = 1;

while (contador <= 4) {
    contador = contador + 1;
    console.log("Olá mundo!");
}

var contador1 = 0;
// var contador1;
    
do {
    contador1 = contador1 + 1;
    console.log("Hello Word!");
} while (contador1 <= 4)


do {
    contador1 = contador1 + 1;
    while (contador <= 4) {
        // contador = contador + 1;
        contador++;
        // contador = contador - 1;
        contador--;
        // contador = contador + 5;
        contador += 5;
        // contador = contador - 5;
        contador -= 5;

        console.log("Olá mundo!");
    }
} while (contador1 <= 4)

// 
// 
// 
// 
// 
// 
// 
