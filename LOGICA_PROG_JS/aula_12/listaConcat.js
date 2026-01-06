function lista() {
    const verao = ["☀️", "", "⛱️", "🌦️", "☔", ""];
    const inverno = ["🌨️", "❄️", "☃️"];

    const climas = verao.concat(inverno);
    const clima = verao.push(inverno);

    console.log("verão: " + verao);
    console.log("inverno: " + inverno);
    console.log("Climas concat: " + climas);
    console.log("clima push: " + clima);
    
}

lista();