
var clicks = 0;

var valCost = 10;
var value = 1;

var imgCost = 20;
var imgNum = 0;

var sizeCost = 15;
var sizeSelect = 1;

var hintController = false;
var hintCost = 5;

function apertouOBiscoito() {
    var Biscoito = document.getElementById("cookie");

    clicks += value;

    change()
}

function change() {
    var points = document.getElementById("clicks");

    points.textContent = clicks;
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
    if (clicks >= sizeCost) {
        clicks -= sizeCost;
        change()
        var sizeC = document.getElementById("sizeCost");

        sizeCost += 5;
        sizeC.textContent = sizeCost + " pts";

        var img = document.getElementById("cookie");
        var width = img.clientWidth;

        var actSize = document.getElementById("actualSize");

        if (sizeSelect == 1) {
            sizeSelect = 0.5;
            actSize.textContent = "Actual: 0.5";
            img.style.width = (width - 50) + "px";
        }
        else if (sizeSelect == 0.5) {
            sizeSelect = 1.5;
            actSize.textContent = "Actual: 1.5";
            img.style.width = (width + 100) + "px";
        }
        else if (sizeSelect == 1.5) {
            sizeSelect = 1;
            actSize.textContent = "Actual: 1.0";
            img.style.width = (width - 50) + "px";
        }
    }

}

function colorCookie() {

    if (clicks >= imgCost) {
        clicks -= imgCost;
        change()
        //imagem
        var img = document.getElementById("cookie");
        //custo de uso
        var imgC = document.getElementById("costImg");
        //id do texto
        var color = document.getElementById("clickName");

        imgCost += 5;
        imgC.textContent = imgCost + " pts";

        switch (imgNum) {
            case 0:
                imgNum++;
                img.src = "ClickImgs/icon2.png";
                color.textContent = "Actual: Click 1";
                break;
            case 1:
                imgNum++;
                img.src = "ClickImgs/icon1.png";
                color.textContent = "Actual: Click 2";
                break;
            case 2:
                imgNum++;
                img.src = "ClickImgs/CookieGreen.png";
                color.textContent = "Actual: Green Cookie";
                break;
            default:
                imgNum = 0;
                img.src = "ClickImgs/Cookie.png";
                color.textContent = "Actual: Cookie";
                break;
        }
    }

}

function hint() {
    if (clicks >= hintCost) {
        clicks -= hintCost;
        change()
        hintCost++;

        var hintPts = document.getElementById("hintPts");
        hintPts.textContent = hintCost + " pts";

        if (hintController == false) {
            hintController = true;
            var title = document.getElementById("hintTitle");
            var text = document.getElementById("hintText");

            title.textContent = "Hint";
            text.textContent = `Upgrade the click, you will receive more. 
            Put the clicker in the big size. 
            Let the hints on ;) 
            The style only change the visual.`
        }
        else if (hintController == true) {
            hintController = false;
            title.textContent = "";
            text.textContent = "";
        }
    }
}