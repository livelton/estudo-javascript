const nome = document.querySelector('#nome');
const documento = document.querySelector('#cpf');
const buttonAdicionar = document.querySelector('#adicionaCliente');
const divCliente = document.querySelector('#exibircliente');
const array = [];


buttonAdicionar.addEventListener('click', adicionarCliente);


class clienteBanco {
    constructor(nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }
}

function adicionarCliente(){
    let clienteCadastrado = new clienteBanco(nome.value, documento.value, 0)
    array.push(clienteCadastrado);
    criarCliente()
}

function criarCliente() {
    
    const exibirCliente = array.map((cliente, indice) => {

        let listaCliente = document.createElement('li');
        let buttonAdicionar = document.createElement('button');
        listaCliente.textContent = `Nome: ${cliente.nome} | Documento: ${cliente.documento} | Saldo: R$${cliente.saldo}`
        listaCliente.appendChild(buttonAdicionar)
        buttonAdicionar.textContent = 'Adicionar 100';
        buttonAdicionar.addEventListener('click', (() => {
            cliente.saldo += 100
            console.log(cliente.saldo)
            criarCliente();
        }))

        let buttonRemover = document.createElement('button');

        listaCliente.appendChild(buttonRemover);
        buttonRemover.textContent = 'Sacar 100';
        buttonRemover.addEventListener('click', (() => {
            cliente.saldo -= 100
            criarCliente();
        }))

        return listaCliente;
    })

    divCliente.replaceChildren(...exibirCliente);

}








