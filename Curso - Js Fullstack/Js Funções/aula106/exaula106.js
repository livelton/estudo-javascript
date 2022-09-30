let nome = prompt("Digite o nome da nave")

let velocidade = 0

let escolha

function showMenu() {
    let decisao
    while(decisao != "1" && decisao != "2" && decisao != "3" && decisao != "4") {
        decisao = prompt("O que deseja fazer?\n" +
                        "1- Acelerar a nave em 5km/s\n" +
                        "2- Desacelerar a nave em 5km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair de programa")
    }

    return decisao
}

function speedUp(velocidade) {
    let novaVelocidade = velocidade + 5
    return novaVelocidade
}

function slowDown(velocidade) {
    let novaVelocidade = velocidade - 5
    if(novaVelocidade < 0) {
        novaVelocidade = 0
    }
    return novaVelocidade
}

function printSpaceshipBoardData(nome, velocidade) {
    alert("Espaçonave: " + nome + "\nVelocidade: " + velocidade + "km/s")
}

do {
    escolha = showMenu()
    switch(escolha) {
        case "1":
            velocidade = speedUp(velocidade)
            break
        case "2":
            velocidade = slowDown(velocidade)
            break
        case "3":
            printSpaceshipBoardData(nome, velocidade)
            break
        default:
            alert("Encerrando programa de bordo")
    }
} while(escolha != "4")