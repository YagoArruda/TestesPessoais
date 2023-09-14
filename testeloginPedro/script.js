function visualizarSenha() {
  var passwordInput = document.getElementById("password");
  var senha = passwordInput.value;
  var senhaExibida = "";

  for (var i = 0; i < senha.length; i++) {
    senhaExibida += "*";
  }

  passwordInput.value = senhaExibida;
}

function loguin() {
  var nomedigitado = document.getElementById("nome").value;
  var senhadigitada = document.getElementById("password").value;

  // Verificar se os campos estão vazios
  if (nomedigitado === '' || senhadigitada === '') {
    console.log("Por favor, preencha todos os campos.");
    return; // Parar a execução do código
  }

  fetch("logins.json")
    .then(response => response.json())
    .then(data => {
      var logins = data.logins;
      console.log(logins)
      var loginEncontrado = false;
      for(let i = 0;i <logins.length ;i++){

        if(logins[i].username == nomedigitado){

          if(logins[i].password == senhadigitada){
            var loginEncontrado = true;
            
            console.log(logins[i])
          }

        }

      }

      if (loginEncontrado == true) {
        console.log("Os dados digitados estão em nome.json");
        window.location.href = "home.html"; // Redirecionar para outra página
      } else {
        console.log("Os dados digitados não estão em nome.json");
      }
    })
    .catch(error => {
      console.error("Erro ao carregar nome.json:", error);
    });
}
