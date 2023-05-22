function getProduct() {

    let prodSpace = document.getElementById("prodSpace");
    let prods = ``;

    for (let i = 0; i < 12; i++) {

        let url = `https://fakestoreapi.com/products/${i+1}`;
        //https://fakestoreapi.com/products/1
        //http://diwserver.vps.webdock.cloud:8765/products/${i+1}

        fetch(url)
            .then(res => res.json())
            .then(data => document.getElementById("all-products").innerHTML += `
            <div class="product">
            <img src="${data.image}" alt="">
            <div class="product-Info">
                <h4 class="product-title fstyle-merri">${data.title}</h4>
                <p class="product-price fstyle-merri">R$${data.price}</p>
                <a class="product-btn fstyle-merri align-self-end" href="product.html" onclick="buyNow(num)">Buy Now</a>
            </div>
            </div>`)

    }

}

function buyNow(num){


}
