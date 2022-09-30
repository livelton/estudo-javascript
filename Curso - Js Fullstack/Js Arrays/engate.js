const NavesEngatadas = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
    //nome da nave, quantidade de pessoas e se ela está engatada ou não
]

//filtrando o número de passageiros [indice 1] sendo maior que nove, e coloca eles dentro de um "novo array"
const filtroNaves = NavesEngatadas.filter(nome => {
    return nome[1] > 9
}).map(nome => {
    //retornando o nome, pois está na posição 0
    return nome[0]
});

const navePendente = NavesEngatadas.findIndex(nome => {
    return nome[2] == false
})

const caixaAlta = NavesEngatadas.map(nave => {
    return nave[0].toUpperCase()
})

window.alert(`Olá, bem vindo!\n
Naves com mais de nove tripulantes: ${filtroNaves}
Posição da nave que ainda não decolou: ${navePendente+1}
Nome das naves: ${caixaAlta} `)