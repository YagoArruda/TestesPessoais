//Mostra os produtos da pagina principal /ok mas da pra melhorar
function renewGet() {
    //24834
    //let urll = `http://diwserver.vps.webdock.cloud:8765/products/category/Accessories - Accessories`;
    let urll = `http://diwserver.vps.webdock.cloud:8765/products/category/Accessories - Accessories`;
    //let urll = `http://diwserver.vps.webdock.cloud:8765/products/24834`; //Jewellery

    req = `Accessories - Accessories`;
    request(3, `product-line1`, `Accessories - Accessories`, 1);
    request(3, `product-line2`, `Accessories - Ties`, 0);
    request(3, `product-line3`, `Accessories - Wallets`, 0);

    request(3, `promotions`, `Accessories - Watches`, 0);

    request(4, `product-line-lg-1`, `Accessories - Jewellery`, 0);

    request(4, `product-line-lg-1`, `Accessories - Cufflinks`, 1);
}

//Faz um request para um numero escolhido de objetos /ok
function request(num, place, categ, dif) {
    let url = `http://diwserver.vps.webdock.cloud:8765/products/category/${categ}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = dif; i < dif + num; i++) {
                document.getElementById(place).innerHTML += printCard(data.products[i]);
            }
        });
}

//Cria o card a ser "printado" na tela (Evita ficar repetindo essa parte do codigo em varias funções)
function printCard(data) {
    let str = `<div class="product">
    <img src="${data.image}" alt="">
    <div class="product-Info">
        <h4 class="product-title fstyle-merri my-0">${data.title}</h4>
        <p class="product-price fstyle-merri my-0" style="color:#36363679;">${data.brandName}</p>
        <p class="product-price fstyle-merri my-0">R$${data.price}</p>
        <div class="m-0 p-0">
            ${stars(data.rating.rate)}
            (${data.rating.count})
        </div>
        <a class="product-btn fstyle-merri align-self-end" href="detalhes.html?id=${data.id}">Buy Now</a>
    </div>
    </div>`;

    return str;
}


//Sem filtro de pesquisa, todos os produtos 
function searchAll2() {
    let c1 = document.getElementById("c1").value;//categoria
    let c2 = document.getElementById("c2").value;//estrelas
    let nome = document.getElementById("name").value;//nome

    let res = `<div class="notFound">
    <h4 class="fstyle-merri"><i class="fs-1 fa-solid fa-magnifying-glass"
    style="color: #2c3e50;"></i><span class="fs-1"> Nothing Found</span></h4>
    </div>`;
    let match = 0;
    let categories = ["Accessories - Accessories", "Accessories - Jewellery", "Accessories - Ties", "Accessories - Wallets", "Accessories - Watches"];
    for (let i = 0; i < categories.length; i++) {
        let url = `http://diwserver.vps.webdock.cloud:8765/products/category/${categories[i]}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.products.length; i++) {
                    if (c1 == "all" || data.products[i].category == c1) {
                        if (c2 == "all" || Math.trunc(data.products[i].rating.rate) == c2) {
                            if (data.products[i].title.toLowerCase().includes(nome.toLowerCase())) {
                                match++;
                                if (match == 1) {
                                    res = ``;
                                }
                                res += printCard(data.products[i]);
                            }
                        }

                    }

                }
                //document.getElementById("all-products").innerHTML = res;
            })
            .then(data => document.getElementById("all-products").innerHTML = res);
    }

}


//Mostra o pro duto na pagina de detalhes do produto /ok
function detalhes() {

    let PageURL = new URLSearchParams(window.location.search);
    let id = PageURL.get("id");

    let url = `http://diwserver.vps.webdock.cloud:8765/products/${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => document.getElementById("productPage").innerHTML += `
        <div class="col-11 col-md-10 col-lg-10 cardBorder justify-content-center">

                    <div class="row text-center justify-content-center fs-merri">
                        <div class="col-12 col-lg-5 m-2 rounded text-center">
                            <img class="rounded img-pp" src="${data.image}" alt="">
                        </div>
                        <div class="col-12 col-lg-5 offset-lg-1 row mt-2">

                            <h3 class="fs-5 mt-3">${data.title}</h3>
                            <p class="fs-1">R$${data.price}</p>
                            <div class="m-0 p-0">
                                ${stars(data.rating.rate)}
                                (${data.rating.count})
                            </div>

                            <div class="col-12 m-2">
                                <a class="btnAppear" href="#">Add to <i class="fa-solid fa-basket-shopping fs-2"
                                        style="color: #ffffff;"></i></a>
                            </div>

                        </div>
                    </div>

                    <div class="bt fs-merri row">

                        <h2 class="col-12">Product Details</h2>

                        <!--Informações da parte de cima-->
                        <div class="col-12 row bt">
                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">Category:</p>
                                <p>${data.category}</p>
                            </div>

                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">BrandName:</p>
                                <p>${data.brandName}</p>
                            </div>

                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">Gender:</p>
                                <p>${data.gender}</p>
                            </div>


                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">Usage:</p>
                                <p>${data.usage}</p>
                            </div>

                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">Season:</p>
                                <p>${data.season}</p>
                            </div>

                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">BaseColour:</p>
                                <p>${data.baseColour}</p>
                            </div>

                        </div>

                        <!--Descrição-->
                        <div class="col-12 row">
                            <div class="col-12">
                                <p class="fs-5 bt">Description:</p>
                                <p>${data.description}</p>
                            </div>
                        </div>

                        <!--Informações da parte de baixo-->
                        <div class="col-12 row bt">
                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">ArticleNumber:</p>
                                <p>${data.articleNumber}</p>
                            </div>

                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">ArticleType:</p>
                                <p>${data.articleType}</p>
                            </div>

                            <div class="col-6 col-md-4 col-lg-4">
                                <p class="fs-5">Year:</p>
                                <p>${data.year}</p>
                            </div>

                        </div>

                    </div>

                </div>`)

    fetch(url)
        .then(res => res.json())
        .then(data => document.getElementById("nomeDaPagina").textContent = `Shopalace: ${data.title}`)

}

//Calcula as estrelas a serem mostradas /ok
function stars(num) {
    num = Math.trunc(num);
    let res = ``;
    let i = 0;
    for (; i < num; i++) {
        res += `<i class="fa-solid fa-star" style="color: #fff700;"></i>`;
    }

    for (; i < 5; i++) {
        res += `<i class="fa-solid fa-star" style="color: #5e5e5e;"></i>`;
    }

    return res;
}

//Envia para a pagina de pesquisa passando como parametro o input /ok
function goSearch() {
    let input = document.getElementById("name").value;
    window.location.href = `pesquisa.html?input=${input}`;
}

//Carrega o input na pagina de pesquisa /ok
function loadSearchInput() {
    let PageURL = new URLSearchParams(window.location.search);
    let input = PageURL.get("input");
    let searchBar = document.getElementById("name");

    searchBar.value = input;
    search();
}