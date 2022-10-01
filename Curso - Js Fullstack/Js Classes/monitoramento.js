//pedindo dados da nave
let nome = prompt('Digite o nome da nave:');
let tripulantes = prompt(`Digite a quantidade de tripulantes da ${nome}`);
let tipoNave = prompt('Digite o tipo da nave\n1 - Batalha\n2 - Transporte');
let velocidade = 0;

//classe que será criada a nave
class Nave {
    static get taxaAceleracao() {
        return 0.17;
    }

    constructor(nome, tripulantes, velocidade) {
        this.nome = nome;
        this.tripulantes = tripulantes;
        this.velocidade = velocidade;
    }
    //método para aceleração
    aceleracao(aceleracao) {
        //a velocidade vai assumir o valor de aceleracao - taxa
        this.velocidade += (aceleracao * (1 - Nave.taxaAceleracao));
    }
}

//aqui será criado a nave de batalha
class NaveBatalha extends Nave {
}

//aqui a nave de transporte
class NaveTransporte extends Nave {

}


if (tipoNave === '1') {
    let armas = prompt('Digite a quantidade de armas que a nave tem');
    //se for selecionado o tipo 1, será criado a navedebatalha
    NovaNave = new NaveBatalha(nome, tripulantes, velocidade);
}

if (tipoNave === '2') {
    let lugares = prompt('Digite a quantidade de lugares que a nave tem');
    //tipo 2, nave de transporte
    NovaNave = new NaveTransporte(nome, tripulantes, velocidade);
}



function menu() {
    let escolha;

    //aqui é o menu
    while (escolha != '1' && escolha != '2' && escolha != '3') {
        escolha = window.prompt(`Escolha uma ação\n
        1- Acelerar nave
        2- Trocar a nave
        3- Imprimir nave e sair`);
    }

    //retornando a escolha do user
    return escolha;
}

let escolha; //declarado escolha pra assumir menu no while

while (escolha != 3) {
    escolha = menu();

    switch (escolha) {
        //acelerar nave
        case '1':
            let aceleracao = prompt('Em quanto você quer acelerar a nave?');
            NovaNave.aceleracao(aceleracao);
            break;

        //trocar de nave
        case '2':
            nome = prompt('Digite o nome da nave:');
            tripulantes = prompt(`Digite a quantidade de tripulantes da ${nome}`);
            tipoNave = prompt('Digite o tipo da nave\n1 - Batalha\n2 - Transporte');
            velocidade = 0;
            if (tipoNave === '1') {
                let armas = prompt('Digite a quantidade de armas que a nave tem');
                //se for selecionado o tipo 1, será criado a navedebatalha
                NovaNave = new NaveBatalha(nome, tripulantes, velocidade);
            }

            if (tipoNave === '2') {
                let lugares = prompt('Digite a quantidade de lugares que a nave tem');
                //tipo 2, nave de transporte
                NovaNave = new NaveTransporte(nome, tripulantes, velocidade);
            }
            window.prompt('Nave recadastrada com sucesso!')
            break;
    }
}

window.alert(`Nome: ${NovaNave.nome}
Quantidade de tripulantes: ${NovaNave.tripulantes}
Velocidade: ${NovaNave.velocidade}`)

