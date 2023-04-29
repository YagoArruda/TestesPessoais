function somenteNumeros(Evento)
 {

    CampoAltura = document.getElementById("Altura");
    var codigo = Evento.keycode;

    if ((codigo < 48 || codigo > 57)) {
        return false;
    }

    mascaraAlt(CampoAltura)

}



function somenteNum(Evento) 
{


    CampoPeso = document.getElementById("Peso");
    var codigo = Evento.keycode;

    if (codigo < 48 || codigo > 57) {
        return false;
    }

    mascaraPes(CampoPeso)


}

function mascaraAlt(elemento) 
{
    var conteudo = elemento.value;

    if (conteudo.lenght == 1) {
        var text = conteudo.charAt(0) + "." + conteudo.substring(1);
        elemento.value = text;
    }
}

mascaraPes(elemento)
{
    var conteudo = elemento.value;

    if (conteudo.lenght == 2) {
        var text = conteudo.charAt(0) + conteudo.charAt(1) + "." + conteudo.substring(2);
        elemento.value = text;
    }
}


function calcularIMC() 
{
    var altura = document.getElementById("Altura").value;
    var peso= document.getElementById("Peso").value;
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
    else if(imc > 24.9 && imc <= 34.9)
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