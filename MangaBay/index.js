
function limitarTexto(texto) {
    var larguraJanela = window.innerWidth;

    let text = "";

    if (larguraJanela < 768) { // Por exemplo, considere telas menores que 768px como telefones
        // Exibir as primeiras x palavras
       text = texto.split(' ').slice(0, 2).join(' ') + " ...";
    } else {
        // Exibir o texto completo em telas maiores
        text = texto;
    }

    return text;
}

atualizarFavs();
window.addEventListener('resize', atualizarFavs);

function atualizarFavs() {
    var lista = document.getElementById("favs");
    var lint = 0;
    if (window.innerWidth < 768) {
        lint = 2;
    }
    else {
        lint = 3;
    }

    let mangas = lerMangasSalvos();

    lista.innerHTML = ``;
    for (var i = 0; i < lint; i++) {
        lista.innerHTML += `<div class="col-lg-4 col-md-4 col-sm-5 col-12">
        <div class="container justify-content-center justify-max row">
            
            <img src="${mangas.mangas[i].imagem}" class="mg-img">
            <div>
                <h6 class="nomeM${i} texto-sobre-imagem">${limitarTexto(mangas.mangas[i].nome)}</h6>
                <div class="mt-1 d-flex justify-content-center">
                    <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                    <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                    <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                    <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                    <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                    <h6 class="ms-2"> ${mangas.mangas[i].avaliacao}</h6>
                </div>
            </div>

        </div>
    </div>`;
    }
}


function lerMangasSalvos() {
    var mangas = localStorage.getItem('mangas')

    if (mangas != null) {
        mangas = JSON.parse(mangas)
    }
    else {
        mangas = inserirDadosBase(mangas)
    }
    return mangas
}

function inserirDadosBase(manga) {

    const dadosBase = {
        Quantidade: 3,
        favorito: "nenhum",
        mangas: [
            {
                id: 0,
                imagem: "Omniscient-Readers-Viewpoint-scaled-e1653004550341.jpg",
                nome: "Omniscient Readers Viewpoint",
                avaliacao: 5.0,
                estrelas: 5,
                scan: "Neox",
                caps: 107,

            },
            {
                id: 1,
                imagem: "O-Comeco-Depois-do-Fim-e1665797596343.jpg",
                nome: "O Comeco Depois do Fim",
                avaliacao: 5.0,
                estrelas: 5,
                scan: "Neox",
                caps: 105,

            },
            {
                id: 2,
                imagem: "A-Returners-Magic-Should-Be-Special-e1653003496257.jpg",
                nome: "A Returners Magic Should Be Special",
                avaliacao: 5.0,
                estrelas: 5,
                scan: "Neox",
                caps: 108,

            },
            {
                id: 3,
                imagem: "sololevnewcov4.jpg",
                nome: "Solo Leveling",
                avaliacao: 5.0,
                estrelas: 5,
                scan: "Neox",
                caps: 204,

            },
            {
                id: 4,
                imagem: "The-Great-Mage-Returns-After-4000-Years-e1653052958881.jpg",
                nome: "The Great Mage Returns After 4000 Years",
                avaliacao: 5.0,
                estrelas: 5,
                scan: "Neox",
                caps: 327,

            }
        ]
    }

    manga = dadosBase;

    return manga;
}

