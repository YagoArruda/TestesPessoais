//Mostra os produtos da pagina principal
function getProduct() {
    let url = `https://fakestoreapi.com/products`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let results = ``;
            for (let i = 1; i < 13; i++) {
                results = results + `
                        <div class="product">
                        <img src="${data[i].image}" alt="">
                        <div class="product-Info">
                            <h4 class="product-title fstyle-merri">${data[i].title}</h4>
                            <p class="product-price fstyle-merri">R$${data[i].price}</p>
                            <a class="product-btn fstyle-merri align-self-end" href="detalhes.html" onclick="buyNow(${data[i].id})">Buy Now</a>
                        </div>
                        </div>`;
            }
            document.getElementById("all-products").innerHTML = results;
        });

}

//Função de pesquisa do site
function pesquisaGeral() {

    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;
    let nome = document.getElementById("name").value;

    if (c1 != "all" || c2 != "all") {
        document.getElementById("all-products").innerHTML = ``;

        if (c1 != c2) {
            if (c1 != "all" && c2 != "all") {
                pesquisaPorCategoria(c1);
                pesquisaPorCategoria(c2);
            }
            else if (c1 != "all") {
                pesquisaPorCategoria(c1);
            }
            else if (c2 != "all") {
                pesquisaPorCategoria(c2);
            }
        }
        else {
            if (c1 != "all") {
                pesquisaPorCategoria(c1);
            }
            else if (c2 != "all") {
                pesquisaPorCategoria(c2);
            }
        }
    }
    else if (nome != null) {
        //sem categoria mas com pesquisa
        pesquisaPorNome(nome);

    }
    else if (c1 == "all" && c2 == "all" && nome == null) {
        //sem categoria e sem pesquisa
        getProduct();
    }
    else {
        semResposta();
    }

}

//Função para caso não existe resposta para as pesquisas
function semResposta() {
    document.getElementById("all-products").innerHTML = `
        <div class="notFound">
        <h4 class="fstyle-merri"><i class="fs-1 fa-solid fa-magnifying-glass" style="color: #2c3e50;"></i><span class="fs-1"> Nothing Found</span></h4>
        </div>`;
}

//Função derivade de pesquisa por categoria
function pesquisaPorCategoria(categoria) {
    let url = `https://fakestoreapi.com/products/category/${categoria}`;
    let name = document.getElementById("name").value;

    //com categoria e pesquisa
    if (name != null) {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                let results = ``;
                for (let i = 1; i < data.length; i++) {
                    if (data[i].title.toLowerCase().includes(name.toLowerCase())) {
                        results = results + `
                    <div class="product">
                    <img src="${data[i].image}" alt="">
                    <div class="product-Info">
                        <h4 class="product-title fstyle-merri">${data[i].title}</h4>
                        <p class="product-price fstyle-merri">R$${data[i].price}</p>
                        <a class="product-btn fstyle-merri align-self-end" href="detalhes.html" onclick="buyNow(${data[i].id})">Buy Now</a>
                    </div>
                    </div>`;
                    }
                }
                if (results != ``) {
                    document.getElementById("all-products").innerHTML += results;
                }
                else {
                    semResposta();
                }
            });

    }
    else {
        //com categoria e sem pesquisa
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let results = ``;
                for (let i = 1; i < data.length; i++) {
                    results = results + `
                <div class="product">
                <img src="${data[i].image}" alt="">
                <div class="product-Info">
                    <h4 class="product-title fstyle-merri">${data[i].title}</h4>
                    <p class="product-price fstyle-merri">R$${data[i].price}</p>
                    <a class="product-btn fstyle-merri align-self-end" href="detalhes.html" onclick="buyNow(${data[i].id})">Buy Now</a>
                </div>
                </div>`;
                }
                if (results != ``) {
                    document.getElementById("all-products").innerHTML = results;
                }
            });
    }
}

//Função derivada de pesquisa por nome
function pesquisaPorNome(nome) {
    let url = `https://fakestoreapi.com/products`;
    nome = nome.toLowerCase();

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let results = ``;
            for (let i = 1; i < data.length; i++) {
                if (data[i].title.toLowerCase().includes(nome)) {
                    results = results + `
                        <div class="product">
                        <img src="${data[i].image}" alt="">
                        <div class="product-Info">
                            <h4 class="product-title fstyle-merri">${data[i].title}</h4>
                            <p class="product-price fstyle-merri">R$${data[i].price}</p>
                            <a class="product-btn fstyle-merri align-self-end" href="detalhes.html" onclick="buyNow(${data[i].id})">Buy Now</a>
                        </div>
                        </div>`;
                }
            }
            if (results != ``) {
                document.getElementById("all-products").innerHTML = results;
            }
            else {
                semResposta();
            }
        });
}

//Mostra o produto na pagina de detalhes do produto
function showprod() {
    let dados = lerJSON();

    let url = `https://fakestoreapi.com/products/${dados.id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => document.getElementById("productPage").innerHTML += `
        <div class="col-11 col-lg-10 cardBorder justify-content-center">

                    <div class="row text-center justify-content-center fs-merri">
                        <div class="col-12 col-lg-5 m-2 rounded text-center">
                            <img class="rounded img-pp" src="${data.image}" alt="">
                        </div>
                        <div class="col-12 col-lg-5 offset-lg-1 row mt-2">
                        
                        <h3 class="fs-5 mt-3">${data.title}</h3>
                        <p class="fs-1">R$${data.price}</p>
                        <div class="col-12 m-2">
                        <a class="btnAppear" href="detalhes.html" onclick="">Add to <i class="fa-solid fa-basket-shopping fs-2" style="color: #ffffff;"></i></a>
                            </div>

                        </div>
                    </div>

                    <div class="bt fs-merri">
                    
                    <h2>Product Details</h2>
                    <p class="fs-5 bt">Category:</p>
                    <p>${data.category}</p>

                    <p class="fs-5 bt">Description:</p>
                    <p>${data.description}</p>

                    </div>

                </div>`)
}

//Le o arquivo JSON
function lerJSON() {
    let strJSON = localStorage.getItem("produto");
    let objJSON;

    if (strJSON) {
        objJSON = JSON.parse(strJSON);
    }

    return objJSON;
}

//Salva o ID do produto escolhido em um arquivo JSON
function buyNow(num) {
    let produto = { id: num };
    localStorage.setItem("produto", JSON.stringify(produto));
}