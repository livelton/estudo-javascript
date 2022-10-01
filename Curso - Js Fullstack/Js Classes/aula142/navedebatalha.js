//aqui será criado a nave de batalha
//terá de ser defenido o construtor mas vai ser puxado da herança
class NaveBatalha extends Nave {
    constructor(nome, tripulantes, quantidadeArmas){
        super(nome, tripulantes)
        this.quantidadeArmas = quantidadeArmas
    }

}