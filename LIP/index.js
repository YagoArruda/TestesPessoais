function salvar(dados) {
  localStorage.setItem("restaurante", JSON.stringify(dados));
}

function sa() {
  let strDados = localStorage.getItem("restaurante");

  let novoContato = { nome: srtNome, telefone: strTelefone };

}

function b2() {
  document.getElementById("error-message").innerHTML = "Invalid username or password. Please try again.";
}


document.getElementById("try").addEventListener("click", function () {
  document.getElementById("text").innerText = "GeeksforGeeks";
});

///fake
/*
const doc = document.getElementById("submit");
console.log(doc);
doc.addEventListener('click', fake());
*/

//document.getElementById("login-form").addEventListener("submit", fake());

function fake() {
  console.log("true");
}

function stor() {
  let strDados = localStorage.getItem("storage");
  let dados = JSON.parse(strDados);
  console.log(dados);
  document.getElementById("error-message").innerHTML = "Invalid username or password. Please try again.";
}

async function stor2() {
  const res = await fetch("storage.json");
  const data = await res.json();
  console.log(data);
}

function DropdownURL2() {

  var text = 'Ferrari 3.0';
  var select = document.getElementById('carros');
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text === text) {
      select.selectedIndex = i;
      break;
    }
  }

}

function DropdownURL() {
  let URL = new URLSearchParams(window.location.search);
  let paramG = URL.get("g");
  let paramB = URL.get("b");
  let paramT = URL.get("t");

  switch (paramB) {
    case "ck":
      paramB = "Calvin Klein"
      break;
    case "eh":
      paramB = "Ed Hardy"
      break;
    case "hb":
      paramB = "Hugo Boss"
      break;
    case "th":
      paramB = "Tommy Hilfiger"
      break;
  }

  switch (paramT) {
    case "pbm":
      paramT = "Perfume and Body Mist"
      break;
    case "fgs":
      paramT = "Fragrance Gift Set"
      break;
  }

  document.getElementById("genders").value = paramG;
  document.getElementById("brands").value = paramB;
  document.getElementById("types").value = paramT;
}





//hhhhdhhdhd
/*
document.getElementById("login-form").addEventListener("onclick", function(event) {
    event.preventDefault();
    login();
    console.log("true")
  });
  */
/*
 function login() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
 
 
   // Aqui você pode adicionar a lógica de verificação de login com base no banco de dados JSON
 
   var authenticated = false;
 
   for (var i = 0; i < users.users.length; i++) {
     var user = users.users[i];
     if (user.username === username && user.password === password) {
       authenticated = true;
       break;
     }
   }
 
   if (authenticated) {
     window.location.href = "aaaaa.hlml";
   } else {
     document.getElementById("error-message").innerHTML = "Invalid username or password. Please try again.";
   }
 }
 
 function toggleDarkMode() {
   var body = document.body;
   var container = document.querySelector(".container");
 
   body.classList.toggle("dark-mode");
   container.classList.toggle("dark-mode");
 }
 */
async function stor3() {
  const res = await fetch("storage.json");
  var data = await res.json();

  console.log(data.logins);
  //data.logins++;
  console.log(data.logins);

  localStorage.setItem(res, JSON.stringify(data.logins));

}

function salvar() {
  let dados = localStorage.getItem("saves")

  let nomep = document.getElementById("nome").value;
  let senhap = document.getElementById("senha").value;

  let obj = [
    nome = nomep,
    senha = senhap,
  ]

  dados.users += JSON.stringify(obj)

  localStorage.setItem("saves", JSON.stringify(obj));
  carregar()
}

function carregar() {
  let dados = localStorage.getItem("saves")//storage.json
  let user = JSON.parse(dados)

  console.log(user)
  let salvos = document.getElementById("salvos")
  for (let i = 0; i < dados.users.length; i++) {
    salvos.innerHTML += `<p>dados.users[i].nome</p>`
  }
}

function limpar() {
  let dados = localStorage.getItem("storage.json")

  let obj = ``
  dados = JSON.stringify(obj)

  localStorage.setItem("storage.json", JSON.stringify(dados));

  console.log(JSON.parse(dados))
}


//teste 3

function carregarConta() {
  let strDados = localStorage.getItem("LoginsS");
  let objDados;

  if (strDados) {
    objDados = JSON.parse(strDados);

    let salvos = document.getElementById("salvos")
    for (let i = 0; i < dados.contas.length; i++) {
      salvos.innerHTML += `<p>dados.users[i].nome</p>`
    }
  }
}

function salvarConta() {
  let dados = localStorage.getItem("LoginsS")

  let nomep = document.getElementById("nome").value;
  let senhap = document.getElementById("senha").value;

  let novaConta = { nome: nomep, senha: senhap };

  dados.contas.push(novaConta);

  localStorage.setItem("LoginsS", JSON.stringify(dados));
  carregarConta()
}


//teste 4
async function supertest() {
  const strDados = await fetch("usus.json");

  if (strDados) {
    var objDados = await strDados.json();
    console.log(objDados)
  }
}

async function lerContatos() {
  const strDados = await fetch("usus.json");

  if (strDados) {
    var objDados = await strDados.json();
    console.log(objDados)
  }

  return objDados;
}

function salvarContatos(dados) {
  localStorage.setItem("usus.json", JSON.stringify(dados));
}

function cadastraNovoContato() {
  //ler do localstorage
  let objDados = lerContatos();
  //inclui o novo
  let nomep = document.getElementById("nome").value;
  let senhap = document.getElementById("senha").value;
  let novoContato = { nome: nomep, senha: senhap };
  //salva os dados dnv
  objDados.usus.push(novoContato);
  salvarContatos(objDados);
  imprimirContatos();
}

function imprimirContatos() {
  let tela = document.getElementById("salvos");
  let strHtml = ``;
  let dados = lerContatos();

  for (let i = 0; i < dados.usus.length; i++) {
    strHtml = strHtml + `
<div class="col-3 border rounded bg-body-secondary text-center mx-3 my-2">
  <p class="mt-2 mb-1">${dados.usus[i].nome}</p>
  <p class="m-0 mb-1">${dados.usus[i].senha}</p>
  <div class="row justify-content-center">
    <button class="col-2 btn btn-success mb-2"><i class="fa-solid fa-phone"></i></button>
    <button class="col-2 offset-2 btn btn-danger mb-2"><i class="fa-solid fa-x"></i></button>
  </div>
</div>`;
  }

  tela.innerHTML = strHtml;
}


//teste com mix 
function mixed() {
  fetch('usus.json')
    .then(response => response.json())
    .then(data => {
      // Carregou o arquivo JSON, agora manipule os dados
      const usuarios = data.usus;

      // Função para adicionar um novo usuário
      function adicionarUsuario(nome, senha) {
        const novoUsuario = {
          nome: nome,
          senha: senha
        };

        usuarios.push(novoUsuario);
      }

      let nomep = document.getElementById("nome").value;
      let senhap = document.getElementById("senha").value;

      // Exemplo de uso da função de adicionar usuário
      adicionarUsuario(nomep, senhap);

      // Salvar novamente o arquivo JSON
      fetch('usus.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          // Trate a resposta do servidor, se necessário
        })
        .catch(error => {
          console.error('Erro ao salvar o arquivo:', error);
        });
    });
}

//teste com mix 2
function getUsuariosM2() {
  fetch('usus.json')
    .then(response => response.json())
    .then(data => {
      return data ? JSON.parse(data) : [];
    })
}

function adicionarUsuarioM2() {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;

  const usuarios = getUsuariosM2();
  const novoUsuario = {
    nome: nome,
    senha: senha
  };

  usuarios.usus.push(novoUsuario);
  localStorage.setItem('usus.json', JSON.stringify(usuarios));

  console.log(usuarios)
}

//teste 27
//mostrar()
function mostrar() {
  fetch('usus.json')
    .then(response => response.json())
    .then(data => {
      console.log("data")
      console.log(data)
    })
}

function salvargg() {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;

  fetch('usus')
    .then(response => response.json())
    .then(data => {
      console.log("data")

      const usuarios = data;
      console.log(usuarios)

      const novoUsuario = {
        nome: nome,
        senha: senha
      };

      usuarios.usus.push(novoUsuario)
      console.log(usuarios)

      data = usuarios;
      localStorage.setItem('usus', JSON.stringify(data));

      console.log("data")
    })
}

//teste 28
function show() {

  var usuarios = localStorage.getItem('usus')
  usuarios = JSON.parse(usuarios)
  var str = ``;
  for (let i = 0; i < usuarios.usus.length; i++) {
    str += `<p>Nome ${i + 1}: ${usuarios.usus[i].nome}</p>`
  }
  document.getElementById("salvos").innerHTML = str;

}

function pegar() {
  var usuarios = localStorage.getItem('usus')

  if (usuarios != null) {
    usuarios = JSON.parse(usuarios)
  }
  else {
    const novoUsuario = {
      "usus": [
        {
          "nome": "yago",
          "senha": "testeS"
        },
        {
          "nome": "admin",
          "senha": "LVD2023"
        }
      ]
    }

    usuarios = novoUsuario;

  }
  return usuarios
}

function save() {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;

  var usuarios = pegar()

  const novoUsuario = {
    nome: nome,
    senha: senha
  };

  usuarios.usus.push(novoUsuario)

  localStorage.setItem('usus', JSON.stringify(usuarios));
  show()
}
