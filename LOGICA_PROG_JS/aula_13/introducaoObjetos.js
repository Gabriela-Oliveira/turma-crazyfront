function cadastroAlunos() {
    // var aluno = {
    //     nome: "João",
    //     idade: 33,
    //     curso: "Front-end",
    //     modalidade: "semi-presencial",
    //     endereço: retornaEndereco(),
    //     cpf: "111.111.111-11",
    //     time: "Mengão",
    // }

    // var aluno1 = {
    //     nome: "João",
    //     idade: 33,
    //     curso: "Front-end",
    //     modalidade: "semi-presencial",
    //     endereço: ["Rua blablabla", "Rua blublulblu"],
    //     cpf: "111.111.111-11",
    //     time: "Mengão",
    // }

    var aluno = {
        nome: "João",
        idade: 33,
        curso: "Front-end",
        modalidade: "semi-presencial",
        endereço: {
            pais: "Brasil",
            cidade: "Terê",
            estado: "RJ",
            bairro: "Centro",
            numero: 90,
            rua: "blablabla"
        },
        cpf: "111.111.111-11",
        time: "Mengão",
    }

    var aluno2 = aluno;

    aluno2.idade = 30;

    console.log(aluno);
    console.log(aluno.nome);
    console.log(aluno.time);

    console.log("Aluno 2", aluno2);
    console.log("Aluno 1", aluno.idade);
    console.log("Aluno 2", aluno2.idade);
    
    

    // var nome = "João";
    // var idade = "33";
    // var curso = "Front-end";
    // var modalidade = "semi-presencial";
    // var endereço = "Rua blablabla";
    // var cpf = "111.111.111-11";
    // var time = "Mengão";

    // console.log(nome);
    // console.log(idade);
    // console.log(curso);
    // console.log(modalidade);
    // console.log(endereço);
    // console.log(cpf);
    // console.log(time);
    
}

cadastroAlunos();