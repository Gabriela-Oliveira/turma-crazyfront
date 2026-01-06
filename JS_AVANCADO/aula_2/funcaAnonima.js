// função anônima

const identificadorAnonimo = function (parametro) {
    return "Quase felz natal!";
}

const retornoIdade =  function() {
    return 30 + 3;
}

var pessoa = {
    nome: "Gabriela",
    idade: retornoIdade()
}

console.log(identificadorAnonimo());
console.log(pessoa);


// quero ter um obj, que vai ter uma propriedade chamada 'alunos' com o nome do três primeiros alunos da turma em ordem alfabética.
// esta propriedade vai receber o retorno de uma function anônima
// esta function vai pedir três nome para o usuário
// lancem um log deste obj
