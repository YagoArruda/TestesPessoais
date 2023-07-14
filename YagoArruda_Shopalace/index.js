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

//Mostra o pro duto na pagina de detalhes do produto
function detalhes() {

    let PageURL = new URLSearchParams(window.location.search);
    let id = PageURL.get("id");

    let url = `https://diwserver.vps.webdock.cloud/products/${id}`;

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

//Calcula as estrelas a serem mostradas
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

//Envia para a pagina de pesquisa passando como parametro o input
function goSearch() {
    let input = document.getElementById("name").value;
    window.location.href = `pesquisa.html?input=${input}`;
}

//Carrega o input na pagina de pesquisa
function loadSearchInput() {
    let PageURL = new URLSearchParams(window.location.search);
    let input = PageURL.get("input");
    let searchBar = document.getElementById("name");

    searchBar.value = input;
    search();
}

//pesquisa
function pesquisa() {
    let c1 = document.getElementById("c1").value;//categoria
    let c2 = document.getElementById("c2").value;//estrelas
    let nome = document.getElementById("name").value;//nome

    let res = `<div class="notFound">
    <h4 class="fstyle-merri"><i class="fs-1 fa-solid fa-magnifying-glass"
    style="color: #2c3e50;"></i><span class="fs-1"> Nothing Found</span></h4>
    </div>`;
    var matchs = 0;

    //categoria
    let categories = ["Accessories - Jewellery", "Accessories - Watches"];
    for (let i = 0; i < categories.length; i++) {

        //pagina//era 4 
        for (let p = 1; p < 30; p++) {
            let url = `https://diwserver.vps.webdock.cloud/products/category/${categories[i]}?page=${p}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    //produto
                    for (let l = 0; l < data.products.length; l++) {

                        if (c1 == "all" || data.products[l].category == c1) {

                            if (c2 == "all" || Math.trunc(data.products[l].rating.rate) == c2) {

                                if (data.products[l].title.toLowerCase().includes(nome.toLowerCase())) {
                                    matchs++;
                                    if (matchs == 1) {
                                        res = ``;
                                    }
                                    res += printCard(data.products[l]);
                                }
                            }

                        }
                    }
                    document.getElementById("all-products").innerHTML = res;
                })

        }

    }
}

//filtro de categoria da pagina inicial
function filtroPaginaInicial() {
    let c1 = document.getElementById("c1").value;//categoria

    if (c1 == "all") {
        document.getElementById("otherProducts").innerHTML = ``;
        galeria("Accessories - Jewellery", 4, 0, "otherProducts", 2);
        galeria("Accessories - Watches", 4, 3, "otherProducts", 2);
    }
    else {

        let res = ``;
        let matchs = 0;
        //categoria
        let categories = ["Accessories - Jewellery", "Accessories - Watches"];
        for (let i = 0; i < categories.length; i++) {

            //pagina
            for (let p = 1; p < 4; p++) {
                let url = `https://diwserver.vps.webdock.cloud/products/category/${categories[i]}?page=${p}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        //produto
                        for (let l = 0; l < data.products.length; l++) {

                            if (matchs < 12 && (c1 == "all" || data.products[l].category == c1)) {
                                matchs++;
                                res += printCard(data.products[l]);
                                if (matchs == 12) {
                                    res += `<p class="fs-merri">To see all results go to our <a href="pesquisa.html">search page</a></p>`;
                                    break;
                                }
                            }
                        }
                        document.getElementById("otherProducts").innerHTML = res;
                    })

            }

        }
    }
}

//gerencia o carregamento dos produtos da pagina inicial
function load() {

    //Categoria,numero de produtos,em qual produto inicia,aonde colocar o produto,pagina da busca
    galeria("Accessories - Jewellery", 6, 0, "productsGallery", 1);
    galeria("Accessories - Watches", 3, 0, "productsGallery", 1);

    galeria("Accessories - Jewellery", 1, 0, "promotions", 1);
    galeria("Accessories - Watches", 2, 0, "promotions", 1);

    galeria("Accessories - Jewellery", 4, 0, "otherProducts", 2);
    galeria("Accessories - Watches", 4, 3, "otherProducts", 2);
}

//carrega os produtos da pagina inicial
function galeria(categoria, products, start, place, page) {
    let url = `https://diwserver.vps.webdock.cloud/products/category/${categoria}?page=${page}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = start; i < products + start; i++) {
                document.getElementById(place).innerHTML += printCard(data.products[i]);
            }
        });
}