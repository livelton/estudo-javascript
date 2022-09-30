const ArrayFilmes = [
    {
        titulo: "Dawn of the Planet of the Apes",
        lancamento: 2014,
    },
    {
        titulo: "District 9",
        lancamento: 2009,
    },
    {
        titulo: "Transformers: Age of Extinction",
        lancamento: 2014,
    },
    {
        titulo: "X-Men: Days of Future Past",
        lancamento: 2014,
    },
    {
        titulo: "The Machinist",
        lancamento: 2004,
    },
    {
        titulo: "The Last Samurai",
        lancamento: 2003,
    },
    {
        titulo: "The Amazing Spider-Man 2",
        lancamento: 2014,
    },
    {
        titulo: "Tangled",
        lancamento: 2010,
    },
    {
        titulo: "Rush",
        lancamento: 2013,
    },
    {
        titulo: "Drag Me to Hell",
        lancamento: 2009,
    },
    {
        titulo: "Despicable Me 2",
        lancamento: 2013,
    },
    {
        titulo: "Kill Bill: Vol. 1",
        lancamento: 2003,
    },
    {
        titulo: "A Bug's Life",
        lancamento: 1998,
    },
    {
        titulo: "Life of Brian",
        lancamento: 1972,
    },
    {
        titulo: "How to Train Your Dragon",
        lancamento: 2010,
    },
];

const filmeInformado = document.querySelector('#filmeInformado');
// const button = document.querySelector('button')
// button.addEventListener('click', exibirFilmes)

window.addEventListener("load", () => {
    exibirFilmes(ArrayFilmes);
    filmeInformado.addEventListener("keyup", () => {
        const filmeBuscado = filmeInformado.value;
        filtrar(filmeBuscado);
    });
});

function filtrar(filmeBuscado) {
    const filmesFiltrados = ArrayFilmes.filter((filme) => {
        return (
            filme.titulo.toLowerCase().includes(filmeBuscado.toLowerCase()) ||
            filme.lancamento.toString().includes(filmeBuscado)
        );
    });
    exibirFilmes(filmesFiltrados);
}

function exibirFilmes(todosFilmes) {
    const listaFilmes = document.querySelector('#filmes')
    const filmesHTML = todosFilmes.map((filme) => {
        const liDeFilmes = document.createElement("li");
        liDeFilmes.textContent = `${filme.titulo} -> ${filme.lancamento}`;
        return liDeFilmes;
    })

    listaFilmes.replaceChildren(...filmesHTML);

    if (filmeInformado.value != '') {
        const filmesPesquisados = todosFilmes.map((filme) => {
            const pesquisados = document.createElement('li')
            pesquisados.textContent = `${filme.titulo} -> ${filme.lancamento}`
            return pesquisados;
        })

        listaFilmes.replaceChildren(...filmesPesquisados)

    }

}

