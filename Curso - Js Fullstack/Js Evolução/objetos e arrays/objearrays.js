let naveObj = {
    nome: "Colossus",
    qtTripulantes: 10,
    engatada: false
}

//um método de 'instanciar' o objeto e atribuir os atributos a uma variável

//let { nome: nomeNave, qtTripulantes: numTripulantes} = nave;

//se a variável tiver o mesmo nome da propriedade

let { nome: nomeNave, qtTripulantes } = naveObj;

console.log(nomeNave, qtTripulantes);

//agora em array

let naveArray = ['Colossus', 'Ártemis', 'Fênix'];

let [colossus, artemis] = naveArray

//a desestruturação acontece porque toda vez que passamos as variáveis dentro de um array, ele assume o que está na posição, colossus é a posição 0 e artemis é a posição 1


console.log(colossus, artemis)

