//aqui será criado a nave de transporte
//terá de ser defenido o construtor mas vai ser puxado da herança
class NaveTransporte extends Nave {
    constructor(nome, tripulantes, quantidadeLugares){
        super(nome, tripulantes)
        this.quantidadeLugares = quantidadeLugares
    }

}