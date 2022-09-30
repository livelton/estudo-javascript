let distanciaAL = window.prompt('Olá, informe a distância em anos-luz!');
let opcaoConversor = window.prompt('Existem três tipos de conversão:\n 1 - Parsec\n 2 - U. Astronônima\n 3 - Km\n Qual você deseja?')
let nomeunidade;
let conversor;
let escolha = Number(opcaoConversor)

switch (escolha) {
    case 1:
        nomeunidade = 'Parsec'
        conversor = distanciaAL * 0,306601;
        break;
    case 2:
        nomeunidade = 'Unidade astronônima'
        conversor = distanciaAL * 63241,1;
        break;
    case 3:
        nomeunidade = 'Km'
        conversor = distanciaAL * Math.pow(10,12)
        break;
    default:
        window.alert(`${distanciaAL}Opção não reconhecida, por favor, tente novamente.`)
}

window.alert(`Distância em anos luz: ${distanciaAL}\nDistância em ${nomeunidade}: ${conversor}`)
