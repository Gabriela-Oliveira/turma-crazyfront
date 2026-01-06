const transporte = () => {
    const listaTransporte = ["🚗","🚑","🚀","🚁","🛸"];

    // const top = (item) => "Top " + item;
    // const listaMap = listaTransporte.map(top);

    const listaMap = listaTransporte.map((item) => "Top " + item);

    console.log(listaTransporte);
    console.log(listaMap);
    
};

transporte();