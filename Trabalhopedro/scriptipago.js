function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

salvarlog()
function salvarlog() {
    var pessoas = localStorage.getItem("logins")

    var nome = document.getElementById("nome").textContent;
    var email = document.getElementById("email").textContent;
    var senha = document.getElementById("senha").textContent;
    var confirma_senha = document.getElementById("confirma_senha").textContent;

    if (senha == confirma_senha) {
        alert("Conta criada com sucesso!!");

        if (pessoas == null) {
            pessoas = {
                cadastros: [
                    {
                        nome: nome,
                        email: email,
                        senha: senha
                    },
                ]
            }
            localStorage.setItem("logins", JSON.stringify(pessoas))
        }
        else {
            pessoas = JSON.parse(pessoas)
            const novaConta = {
                nome: nome,
                email: email,
                senha: senha
            };
            pessoas.cadastros.push(novaConta)
            localStorage.setItem("logins", JSON.stringify(pessoas))
        }
    }

    else {

        alert("As senhas não estão iguais!!");
    }


}