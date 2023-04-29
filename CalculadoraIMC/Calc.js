function somenteNumeros(evento) {
    CampoAltura = document.getElementById("altura");
    console.log(CampoAltura);
    var codigo = evento.keycode;

    if (codigo < 48 || codigo > 57) {
        return false;
    }

    mascaraAlt(CampoAltura)

}

function somenteNum(evento) {
    CampoPeso = document.getElementById("peso");
    var codigo = evento.keycode;

    if (codigo < 48 || codigo > 57) {
        return false;
    }

    mascaraPes(CampoPeso)
}

function mascaraAlt(elemento) {
    var conteudo = elemento.value;

    if (conteudo.length == 1) {
        var text = conteudo.charAt(0) + "." + conteudo.substring(1);
        elemento.value = text;
    }
}

function mascaraPes(elemento) {
    var conteudo = elemento.value;

    if (conteudo.length == 2) {
        var text = conteudo.charAt(0) + conteudo.charAt(1) + "." + conteudo.substring(2);
        elemento.value = text;
    }
}

function calcularIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var imc = (peso / (altura * altura)).toFixed(1);

    var linkimg = "";

    var resultadoimc = "";
    var frase = "";
    var text = "";

    if (imc <= 18.5) {
        var linkimg = "./CalcImgs/abaixo.png";
        var resultadoimc = "Abaixo do peso";
        var frase = "Pode ser uma caracaracteristica ou um problema";
        var text = "Abaixo ou igual a 18.5";
    }
    else if (imc > 18.5 && imc <= 24.9) {
        var linkimg = "./CalcImgs/saudavel.png";
        var resultadoimc = "Peso ideal";
        var frase = "Você esta na faixa de peso ideal";
        var text = "Entre 18.5 e 24.9";
    }
    else if (imc > 24.9 && imc <= 29.9) {
        var linkimg = "./CalcImgs/sobrepeso.png";
        var resultadoimc = "Sobrepeso";
        var frase = "Pode levar a problemas de saúde caso você ganhe mais alguns quilos";
        var text = "Entre 24.9 e 29.9";
    }
    else if (imc > 29.9 && imc <= 34.9) {
        var linkimg = "./CalcImgs/grau1.png";
        var resultadoimc = "Obesidade grau I";
        var frase = "Grande risco de desenvolver doenças devido ao peso";
        var text = "Entre 29.9 e 34.9";
    }
    else if (imc > 34.9 && imc <= 39.9) {
        var linkimg = "./CalcImgs/grau2.png";
        var resultadoimc = "Obesidade grau II";
        var frase = "Risco alto de desenvolver doenças devido ao peso";
        var text = "Entre 34.9 e 39.9";
    }
    else if (imc > 39.9) {
        var linkimg = "./CalcImgs/grau3.png";
        var resultadoimc = "Obesidade grau III";
        var frase = "Risco extremamente alto de desenvolver doenças devido ao peso";
        var text = "Acima de 39.9";
    }

    document.getElementById("texto").innerHTML = `<div class="row">
    <div class="col-6 pt-2">
    <p class="text-center">Seu IMC é: <strong>${imc}</strong></p>
    <p class="text-center">IMC ${text} <br> <strong>${resultadoimc}</strong></p>
    <p class="text-center"><strong>${frase}</strong></p>
    </div>

    <div class="col-6 justify-content-center align-self-center">
    <img src="${linkimg}" style="max-width: 100px;" class="rounded mx-auto d-block">
    </div>
    </div>`
    alert("Este resultado se trata de uma estimativa simplificada e pode não representar a realidade.")
}