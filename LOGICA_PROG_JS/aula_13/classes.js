class Aluno {
    nome
    idade
    curso
    modalidade
    endereço
    cpf
    time
}

var aluno1 = new Aluno();
aluno1.nome = "Gustavo"
aluno1.idade = 19
aluno1.curso = "Front-end"
aluno1.modalidade = "semi-presencial"
aluno1.endereço = "Rua blablabla"
aluno1.cpf = "111.111.111-11"
aluno1.time = "Mengão"

console.log(aluno1);

class Aluno1 {
    constructor(nome, idade, curso, modalidade, endereço, cpf, time) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.modalidade = modalidade;
        this.endereço = endereço;
        this.cpf = cpf;
        this.time = time;
    }
}

var aluno2 = new Aluno1(
    {    
        nome: "João",
        idade: 33,
        curso: "Front-end",
        modalidade: "semi-presencial",
        endereço: ["Rua blablabla", "Rua blublulblu"],
        cpf: "111.111.111-11",
        time: "Mengão"
    }
);

console.log(aluno2);
