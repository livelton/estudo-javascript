class Nave {
    //Criando a nave com nome e tripulantes, passando engate e portas abertas como falso para alterar depois
    constructor(nome, tripulantes){
        this.nome = nome
        this.tripulantes = tripulantes
        this.engatada = false;
        this.portasAbertas = false;
    }

    engatar(){
        //método para engatar a nave
        this.engatada = true;
        this.portasAbertas = true;
    }
}

function menu(){
    let escolha;

    //repetição do menu enquanto ele digita 1,2,3
    while(escolha !='1' && escolha !='2' && escolha !='3'){
        escolha = window.prompt(`O que deseja fazer?\n
        1-Engatar nave\n
        2-Imprimir naves\n
        3-Sair do programa`)
    }
    //vamos utilizar o que o user escolheu
    return escolha
}

function criarNave(){
    let nomeDaNave = window.prompt('Informe o nome da nave');
    let qtTripulantes = window.prompt('Informe a quantidade de tripulantes')
    //pegando o nome e a quantidade de tripulantes

    let nave = new Nave(nomeDaNave, qtTripulantes)
    //instanciando e criando esse objeto

    return nave
    //retornando o obj criado
}

let navesCadastradas = []; //recebe todas as naves que foram engatadas
let escolha;

function mostrarNaves(naves){
    let listaDeNaves = ''
    //percorrer cada elemento do array naves
    naves.forEach((naves, indice) => {
        //lista de naves vai receber essa linha com o nome e quantidade de tripulantes
        listaDeNaves += `${(indice + 1)} - ${naves.nome} (${naves.tripulantes} Tripulantes)\n`
    })
    window.alert(listaDeNaves)

}

while(escolha != '3'){
    //enquanto a escolha não for 3, que é para sair do programa, a escolha vai receber o return da função menu
    escolha = menu()
    switch(escolha){
        case '1':
            let novaNave = criarNave(); //recebe o retorno da função, o objeto criado do tipo Nave
            novaNave.engatar() //vai mudar os dois métodos de engate e porta pra true
            navesCadastradas.push(novaNave)
            break;

        case '2':
            mostrarNaves(navesCadastradas);
            break;

    }
}







