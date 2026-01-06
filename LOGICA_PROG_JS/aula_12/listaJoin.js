function lista() {
    var listaTenis = ["Adidas Breaknet", "AllStar", 8, "Adidas Superstar", true, "Adidas Stan Smith", "Air Force"];

    const texto = listaTenis.join(" ");
    const texto1 = listaTenis.join(" / ");
    const texto2 = listaTenis.join(" , ");
    const texto3 = listaTenis.join(" \n ");

    console.log(texto);
    console.log(texto1);
    console.log(texto2);
    console.log(texto3);
    // console.log(typeof texto);
    
}

lista();