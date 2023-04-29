function somenteNumeros(evento)
 {
    CampoAltura = document.getElementById("altura");
    console.log(CampoAltura);
    var codigo = evento.keycode;

    if (codigo < 48 || codigo > 57) 
    {
        return false;
    }

    mascaraAlt(CampoAltura)

}

function somenteNum(evento) 
{
    CampoPeso = document.getElementById("peso");
    var codigo = evento.keycode;

    if (codigo < 48 || codigo > 57) 
    {
        return false;
    }

    mascaraPes(CampoPeso)
}

function mascaraAlt(elemento) 
{
    var conteudo = elemento.value;

    if (conteudo.length == 1) {
        var text = conteudo.charAt(0) + "." + conteudo.substring(1);
        elemento.value = text;
    }
}

function mascaraPes(elemento)
{
    var conteudo = elemento.value;

    if (conteudo.length == 2) {
        var text = conteudo.charAt(0) + conteudo.charAt(1) + "." + conteudo.substring(2);
        elemento.value = text;
    }
}


function calcularIMC() 
{
    var altura = document.getElementById("altura").value;
    var peso= document.getElementById("peso").value;
    var imc = (peso / (altura * altura)).toFixed(1);

    var linkimg = "";

    var resultadoimc = "";
    var frase = "";
    var text = "";

    if(imc <= 18.5)
    {
        var linkimg = "./img/abaixo.png";
        var resultadoimc = "Abaixo do peso";
        var frase = "pode ser uma carac ou um problema";
        var text = "Abaixo ou igual a 18.5";
    }
    else if(imc > 18.5 && imc <= 24.9)
    {
        var linkimg = "./img/abaixo.png";
        var resultadoimc = "Abaixo do peso";
        var frase = "pode ser uma carac ou um problema";
        var text = "Abaixo ou igual a 18.5";
    }
    else if(imc > 24.9 && imc <= 29.9)
    {
        var linkimg = "./img/abaixo.png";
        var resultadoimc = "Abaixo do peso";
        var frase = "pode ser uma carac ou um problema";
        var text = "Abaixo ou igual a 18.5";
    }
    else if(imc > 29.9 && imc <= 34.9)
    {
        var linkimg = "./img/abaixo.png";
        var resultadoimc = "Abaixo do peso";
        var frase = "pode ser uma carac ou um problema";
        var text = "Abaixo ou igual a 18.5";
    }
    else if(imc > 39.9)
    {
        var linkimg = "./img/abaixo.png";
        var resultadoimc = "Abaixo do peso";
        var frase = "pode ser uma carac ou um problema";
        var text = "Abaixo ou igual a 18.5";
    }
}