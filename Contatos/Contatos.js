function somenteNumeros(event) {

    CampoNumero = document.getElementById("telefone");

    var codigo = event.which;

    if (codigo < 48 || codigo > 57) {
        return false;
    }

    mascaraTele(CampoNumero)
}

function mascaraTele(elemento) {
    var conteudo = elemento.value;
    var text;

    if (conteudo.length == 2) {
        text = "(" + conteudo.charAt(0) + conteudo.charAt(1) + ")" + " ";
        elemento.value = text;
    }
    if (conteudo.length == 6) {
        text = "(" + conteudo.charAt(1) + conteudo.charAt(2) + ")" + " " + conteudo.charAt(5) + " ";
        elemento.value = text;
    }
    if (conteudo.length == 11) {
        text = "(" + conteudo.charAt(1) + conteudo.charAt(2) + ")" + " " + conteudo.charAt(5) + " " + conteudo.charAt(7) + conteudo.charAt(8) + conteudo.charAt(9) + conteudo.charAt(10) + "-";
        elemento.value = text;
    }

}


function lerContatos() {
    let strDados = localStorage.getItem("contatos");
    let objDados;

    if (strDados) {
        objDados = JSON.parse(strDados);
    }

    return objDados;
}

function salvarContatos(dados) {
    localStorage.setItem("contatos", JSON.stringify(dados));
}

function cadastraNovoContato() {
    //ler do localstorage
    let objDados = lerContatos();
    //inclui o novo
    let srtNome = document.getElementById("nome").value;
    let strTelefone = document.getElementById("telefone").value;
    let novoContato = { nome: srtNome, telefone: strTelefone };
    //salva os dados dnv
    objDados.contatos.push(novoContato);
    salvarContatos(objDados);
    imprimirContatos();
}

function imprimirContatos() {
    let tela = document.getElementById("tela");
    let strHtml = ``;
    let dados = lerContatos();

    for (let i = 0; i < dados.contatos.length; i++) {
        strHtml = strHtml + `
<div class="col-3 border rounded bg-body-secondary text-center mx-3 my-2">
    <p class="mt-2 mb-1">${dados.contatos[i].nome}</p>
    <p class="m-0 mb-1">${dados.contatos[i].telefone}</p>
    <div class="row justify-content-center">
      <button class="col-2 btn btn-success mb-2"><i class="fa-solid fa-phone"></i></button>
      <button class="col-2 offset-2 btn btn-danger mb-2"><i class="fa-solid fa-x"></i></button>
    </div>
  </div>`;
    }

    tela.innerHTML = strHtml;
}

funtion