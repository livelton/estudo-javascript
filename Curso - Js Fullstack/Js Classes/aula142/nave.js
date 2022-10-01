//classe que será criada a nave
class Nave {
    static get taxaAceleracao() {
        return 0.17;
    }

    constructor(nome, tripulantes) {
        this.nome = nome;
        this.tripulantes = tripulantes;
        this.velocidade = 0;
    }
    //método para aceleração
    acelerar(aceleracao) {
        //a velocidade vai assumir o valor de aceleracao - taxa
        this.velocidade += (aceleracao * (1 - Nave.taxaAceleracao));
    }
}