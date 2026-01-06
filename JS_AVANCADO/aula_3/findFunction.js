const transporte = () => {
    const listaTransporte = ["🚗","🚑","🛸","🚀","🚁","🛸"];

    // const fn = (item) => item === "🛸";
    // const amiguinhos = listaTransporte.find(fn);

    const amiguinhos = listaTransporte.find((item) => item === "🛸");
    console.log(amiguinhos);    
};

transporte();