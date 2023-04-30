
var clicks = 0;

var valCost = 10;
var value = 1;

var imgNum = 0;

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

function colorCookie() {
    varimg = document.getElementById("cookie").innerHTML;
    img.src
    //document.getElementById("cookie").innerHTML = `<img src="${imgText}" style="max-width: 100px;" class="rounded mx-auto d-block">`
}
function 
   
apertouOBiscoito() {
    var Biscoito = document.getElementById("cookie");

    clicks += value;

    

    clicks += value;

   


    clicks += value;

// Change the image source
    
   
if (imgNum === 0) {
        
        B

       
Biscoito.src = "ClickImgs/Cookie2.png";
        imgNum = 
       
1;
    } 
   
else {
        
        B

       
Biscoito.src = "ClickImgs/Cookie.png";
        imgNum = 
       
0;
    }

    
    }

   

    }


   
change()
}
