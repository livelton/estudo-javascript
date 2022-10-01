class App {
    constructor() {
        //vai começar como nulo pra definir o tipo de nave
        this.Nave = null;
    }

    start() {
        this.cadastroNave();

        let escolha

        do {
            escolha = this.menu()
            this.redirecionarEscolha(escolha)

        } while (escolha != '3');

        this.sairPrograma()
    }

    //metodo de cadastro
    cadastroNave() {
        let nome = prompt('Digite o nome da nave:');
        let tripulantes = prompt(`Digite a quantidade de tripulantes da ${nome}`);
        let tipoNave = this.InfoTipoNave()
        if (tipoNave === '1') {
            let armas = prompt('Digite a quantidade de armas que a nave tem');
            //vai ser passado pro atributo nave a nova nave
            this.Nave = new NaveBatalha(nome, tripulantes, armas);
        }
        else {
            let lugares = prompt('Digite a quantidade de lugares que a nave tem');
            //tipo 2, nave de transporte
            this.Nave = new NaveTransporte(nome, tripulantes, lugares);
        }
    }

    //checar o tipo de nave
    InfoTipoNave() {
        let escolha
        while (!["1", "2"].includes(escolha)) {
            //escolha vai assumir o tipo de nave
            escolha = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte")
        }
        return escolha
    }

    menu() {
        const mensagemMenu = (`Escolha uma ação\n
        1- Acelerar nave
        2- Trocar a nave
        3- Imprimir nave e sair`);

        let escolha = prompt(mensagemMenu)

        //Enquanto a opção for 1,2,3 será exibido a mensagem
        while (!['1', '2', '3'].includes(escolha)) {
            escolha = prompt(mensagemMenu)
        }

        return escolha;
    }

    redirecionarEscolha(escolha) {
        switch (escolha) {
            //acelerar nave
            case '1':
                this.acelerarNave();
                break;

            case '2':
                //cria um novo objeto e sobrescreve
                this.cadastroNave();
                break;
        }

    }

    acelerarNave() {
        let aceleracao = Number(prompt('O quanto você gostaria de acelerar?'))
        this.Nave.acelerar(aceleracao)
    }

    sairPrograma() {
        let mensagemFinal = `Nome: ${this.Nave.nome}
        Quantidade de tripulantes: ${this.Nave.tripulantes}
        Velocidade: ${this.Nave.velocidade}`

        alert(mensagemFinal)
    }
}