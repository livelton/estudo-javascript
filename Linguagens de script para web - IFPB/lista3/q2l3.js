const button = document.querySelector('button')
const filmeInformado = document.querySelector('#filmeInformado')
const generoInformado = document.querySelector('#Gênero')
const arrayFilmes = []
const pesquisar = document.querySelector('#pesquisar')
const listaDeFilmes = document.querySelector("#listaDeFilmes")
const listaDeFilmesProcurados = document.querySelector("#listaProcurados")

function registrarFilme() {
    
    const filmes = {
        nome: filmeInformado.value,
        genero: generoInformado.value
    };
    arrayFilmes.push(filmes);
    //chama a função exibir
    exibirFilmesCriados()
    // console.log(arrayFilmes)


    //reseta o código pra uma string vazia quando adicionado
    filmeInformado.value = '';
    generoInformado.value = '';

    return arrayFilmes;
}

button.addEventListener('click', registrarFilme); //chama a função no clique

//exibe os filmes
function exibirFilmesCriados() {
    //cria um paragrafo e coloca no listadefilmes, que já está criado em HTML
    let escreveFilmes = document.createElement('p')
    listaDeFilmes.appendChild(escreveFilmes)
    //para cada item do arrayfilmes, será escrito o nome e gênero
    arrayFilmes.forEach((filmes) => {
        escreveFilmes.textContent = `Filme: ${filmes.nome} - Gênero ${filmes.genero}`
    });

}

function exibirFilmesPesquisados(arrayFilmes) {

    //se pesquisar.value não estiver vazio, vai ser chamado
    if(pesquisar.value != ''){
        //função map para percorrer o arrayFilmes e cria uma lista a cada percorrido
        const filmesPesquisados = arrayFilmes.map((filme) => {
            const pesquisados = document.createElement('li')
            pesquisados.textContent = `Filme: ${filme.nome} | Gênero ${filme.genero}`
            //retorna a lista
            return pesquisados;
        })
    
        //substitui a lista pela filmespesquisados
        listaDeFilmesProcurados.replaceChildren(...filmesPesquisados);
    }
    else{
        //se tiver vazio, exibe vazio
        listaDeFilmesProcurados.replaceChildren()
    }

};

//vai chamar a função filtrar com keyup quando a página for iniciada
window.addEventListener("load", () => {
    exibirFilmesPesquisados(arrayFilmes);
    pesquisar.addEventListener("keyup", () => {
        const valorFiltro = pesquisar.value;
        filtrar(valorFiltro);
    });
});

//função vai filtrar os filmes
function filtrar(filmeBuscado) {
    //vai percorrer e retornar tudo em minusculo
    const filmesFiltrados = arrayFilmes.filter((arrayFilmes) => {
        return (
            arrayFilmes.nome.toLowerCase().includes(filmeBuscado.toLowerCase()) ||
            arrayFilmes.genero.toLowerCase().includes(filmeBuscado.toLowerCase())
        );
    });
    //vai exibir os filmes
    exibirFilmesPesquisados(filmesFiltrados);
}


