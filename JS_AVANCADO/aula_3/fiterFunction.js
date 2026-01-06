const transporte = () => {
    const listaTransporte = ["🚗","🚑","🚀","🚁","🛸"];

    // const fn = (item) => item === "🛸";
    // const amiguinhos = listaTransporte.filter(fn);

    const amiguinhos = listaTransporte.filter((item) => item === "🛸");
    console.log(amiguinhos);    
};

transporte();