let velocidadeNave = 0;
let nomeNave = window.prompt("Digite o nome da nave");
let tipoNave = window.prompt("Digite o tipo da nave");
let velocidadeMax = window.prompt("Digite a velocidade máxima da nave");
let escolha = window.prompt("Escolha 1 para parar e 2 para acelerar");

let dadosNave = {
    nome: nomeNave,
    tipo: tipoNave,
    velocidadeMax: velocidadeMax
}

switch (escolha) {
    case "1":
        window.alert(`Nave parada com sucesso!\n
        Nome da nave: ${dadosNave.nome}
        Tipo da nave: ${dadosNave.tipo}
        Velocidade máxima da nave: ${dadosNave.velocidadeMax}`)
        break;
    case "2":
        let aceleracao = window.prompt("Quanto você deseja acelerar a nave?")
        if(velocidadeMax < aceleracao){
            velocidadeNave += Number(aceleracao);
            window.alert(`Velocidade ajustada para: ${velocidadeNave}`)
            
        }else{
            window.alert("Essa aceleração está ultrapassando os limites da nave")
            break;
        }
    
        break;
}