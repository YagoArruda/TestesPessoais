function exemploAPI(){
    URLDaAPI = `http://diwserver.vps.webdock.cloud:8765/products`;
    fetch(URLDaAPI)
    .then(RespostaDaAPI => RespostaDaAPI.json())
    .then(RespostaConvertida => {
        for (let i = 0; i < RespostaConvertida.products.length; i++) {
            //Aqui dentro vai o que tiver que ser feito: filtrar e imprimir ou imprimir os dados
        }
    })
    .then(RespostaConvertida => document.getElementById("EspacoDosProdutos").innerHTML = RespostaConvertida);
}

function allJewllery(){
    for(let i =0; i <203;i++){
        let urll = `http://diwserver.vps.webdock.cloud:8765/products/category/Accessories - Jewellery`;
    }
}
