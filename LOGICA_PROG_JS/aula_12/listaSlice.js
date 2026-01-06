function listaSlice() {
    const carros = ["🚗", "🚐", "🚌", "🚎", "🚙"];
    const novaListaCarros = carros.slice(1, 4);

    console.log("carros: " + carros);
    console.log("novaListaCarros" + novaListaCarros);
}

listaSlice();