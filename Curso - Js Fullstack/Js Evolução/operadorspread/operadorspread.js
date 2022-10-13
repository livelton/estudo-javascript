// o operador spread é a reticência
//exemplo de uso do operador

let naves = ['Colossus', 'Artemis', 'Arrascaeta']

//console.log(...naves)
// o operador spread vai desempacotar o array, então ao invés de ser um array, serão três entidades distintas

//EXEMPLO DE USO

let novaNave = [...naves, 'Golias']

//console.log(novaNave)

//OUTRO EXEMPLO

function aumentarVelocidade(velocidade, aceleracao){
    return velocidade + aceleracao;
}

let aceleracaoNave = [60, 10];

let novaVelocidade = aumentarVelocidade(...aceleracaoNave)

console.log(novaVelocidade)