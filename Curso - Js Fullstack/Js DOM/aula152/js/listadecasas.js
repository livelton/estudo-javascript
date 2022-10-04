function salvarCasa(){
    //pegando as variaveis
    let area = document.querySelector('#area');
    let numero = document.querySelector('#numero');
    let bairro = document.querySelector('#bairro');
    let cidade = document.querySelector('#cidade');

    //criando um elemento
    let listaDeCasas = document.createElement('li')

    //atribuindo um texto pro novo elemento li
    listaDeCasas.textContent = `${area.value} m2, numero: ${numero.value}, bairro: ${bairro.value} - cidade: ${cidade.value}  ` 

    //criando o botao de remover
    let botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'remover'

    //quando clicado, vai ser passado a linha que o botão está como parametro
    //importante setar o atributo onclick, pois tá sendo no html, não no js, ao invés de somente click
    botaoRemover.setAttribute('onclick', 'removerCasa(this)')

    //colocando o botão dentro do li
    listaDeCasas.appendChild(botaoRemover)

    //pegando a div que criei no HTML
    let divCasas = document.querySelector('#listaCasas')

    //colocando o li dentro da ul
    divCasas.appendChild(listaDeCasas)
} 

function removerCasa(button){
    //pegando o pai do botão, ou seja, o li inteiro
    let listaParaRemover = button.parentNode

    let divCasas = document.querySelector('#listaCasas')

    //e removendo o li inteiro, que é pai do botão.
    divCasas.removeChild(listaParaRemover)
}