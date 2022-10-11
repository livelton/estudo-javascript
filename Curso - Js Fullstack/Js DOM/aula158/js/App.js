class App {
    //função de adicionar propriedade
    adicionarPropriedade() {
        //não deixar o padrão submit no form
        event.preventDefault();

        //pegando tipo, area e se está alugado
        let tipo = document.querySelector('#tipoCasa');
        let area = document.querySelector('#area');
        let alugado = document.querySelector('#alugado').checked;

        //criando uma nova propriedade passando tipo, area e se está alugado
        let propriedade = new Imovel(tipo.value, area.value, alugado);

        //chama a função passando o parametro propriedades que é uma classe instanciada
        this.mostrarListaPropriedades(propriedade);
        this.limparForm();
    }

    //função de mostrar a lista criando após botão
    mostrarListaPropriedades(propriedade) {
        //criando um elemento e uma string com todos os dados
        let lista = document.createElement('li');
        let propriedadeInfo = (` Tipo: ${propriedade.tipo} Area: ${propriedade.area} m2 `)

        //se a propriedade tiver alugado, pois o atributo só é definido quando tiver checado
        if (propriedade.alugado) {
            //se estiver, vai receber o retorno do marcaralugado, que é um span e colocar ele na lista
            let estaAlugado = this.marcarAlugado()
            lista.appendChild(estaAlugado)
        }

        //importante usar innerHTML ao invés de textcontent, pois textcontent tira a estilização
        lista.innerHTML += propriedadeInfo;

        //criando o botão remover e colocando junto do li criado
        let botaoRemover = this.botaoRemover()
        lista.appendChild(botaoRemover);

        let listaCadastrados = document.querySelector('#propriedades');

        //selecionando uma ul que já tá no HTML e passando a lista como parametro para ser exibido
        listaCadastrados.appendChild(lista);
    }

    marcarAlugado() {
        //aqui é o caso se tiver alugado, vai ser criado um span com estilização
        let marcado = document.createElement('span')
        marcado.style.color = 'white'
        marcado.style.backgroundColor = 'red'
        marcado.innerText = 'ALUGADO'

        //aqui vai retornar esse span criado ali acima
        return marcado;
    }

    botaoRemover() {
        //aqui vai ser criado o botão remover
        let botaoRemover = document.createElement('button');
        //adicionando um evento pra remover o elemento
        botaoRemover.addEventListener('click', app.removerElemento);
        botaoRemover.textContent = 'Remover';

        return botaoRemover;
    }

    limparForm() {
        //aqui vai pegar a area e o alugado estando checked e atribuir false e limpar o input
        let area = document.querySelector('#area')
        let alugado = document.querySelector('#alugado')

        alugado.checked = false;
        area.value = ''
    }

    removerElemento() {
        //aqui vai remover todos os elementos que são parentes do botão, ou seja, o li inteiro
        let elementoRemover = event.target.parentNode
        let propriedades = document.querySelector("#propriedades")
        propriedades.removeChild(elementoRemover)
    }
}