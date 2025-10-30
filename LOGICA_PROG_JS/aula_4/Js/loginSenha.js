// Resposta no console true e false
// Senha = abc123
// senhaUsuario ?

var senha;

function login() {
 const senha = "abc123";
 const senhaUsuario = prompt("Digite a sua senha: ");
 var resultadoSenha = senha === senhaUsuario;

 console.log(senha);
 console.log(senhaUsuario);
 
 console.log("Resultado da senha: " + resultadoSenha);
}

function alterarSenha() {
    senha = prompt("Digite a nova senha: ");
    console.log("Nova senha: " + senha);
}

function senhaChama() {
    console.log(senha);
}


login();