
var clicks = 0;

var valCost = 10;
var value = 1;

function apertouOBiscoito() {
    var Biscoito = document.getElementById("cookie");

    clicks += value;

    change()
}

function change() {
    var points = document.getElementById("clicks");

    var clickText = "";

    if (clicks < 10) {
        clickText = "00" + clicks;
    }
    else if (clickText < 100) {
        clickText = "0" + clicks;
    }
    else if (clickText > 100) {
        clickText = clicks;
    }

    points.textContent = clickText;
}

function valueInc() {
    if (clicks >= valCost) {
        clicks -= valCost;
        value++;
        valCost *= 2;

        var valueGet = document.getElementById("valueText");
        valueGet.textContent = "Actual: " + value;
        var costGet = document.getElementById("costText");
        costGet.textContent = valCost + " pts";

        change()
    }
}

function size() {

}

function changeCookie() {
    var imgText = "ClickImgs/CookieGreen.png";

    var num = Math.random() * (3 - 1) + 1;

    if (num <= 0) {
        //imgText = "ClickImgs/CookieGreen.png"
        document.getElementById("cookie").innerHTML = `<img id="cookie" src="ClickImgs/CookieGreen.png" style="max-width: 250px;" onclick="apertouOBiscoito()"></img>`
    }
    else if (num <= 1) {
        //imgText = "ClickImgs/CookieGreen.png"
        document.getElementById("cookie").innerHTML = `<img id="cookie" src="ClickImgs/CookieGreen.png" style="max-width: 250px;" onclick="apertouOBiscoito()"></img>`
    }
    else if (num <= 2) {
        //imgText = "ClickImgs/CookieGreen.png"
        document.getElementById("cookie").innerHTML = `<img id="cookie" src="ClickImgs/CookieGreen.png" style="max-width: 250px;" onclick="apertouOBiscoito()"></img>`
    }
    else {
        //imgText = "ClickImgs/CookieGreen.png"
        document.getElementById("cookie").innerHTML = `<img id="cookie" src="ClickImgs/CookieGreen.png" style="max-width: 250px;" onclick="apertouOBiscoito()"></img>`
    }
    document.getElementById("cookie").innerHTML = `<img src="${imgText}" style="max-width: 100px;" class="rounded mx-auto d-block">`

    alert(num);
}