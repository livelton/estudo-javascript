let tarefas = document.querySelector('#tarefas');
let button = document.querySelector('#botAdd')
let div = document.querySelector('#div')

button.addEventListener("click", mudaEstadoBotao)

function aguardar(txtBotao, desabilitaBotao) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            button.textContent = txtBotao
            button.disabled = desabilitaBotao
            resolve(button);
        }, 3000)
    });
}

function mudaEstadoBotao(){
    aguardar('Processando...', true)
    .then((resposta) => {
        return aguardar('Concluido!', false)
    })
    .then((resposta) => {
        item = document.createElement('p');
        item.textContent = tarefas.value;
        div.appendChild(item);
        return aguardar('Adicionar')
    })

}
