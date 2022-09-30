let dataPartidaInformada = prompt('Digite a data de partida (Formato: DD/MM/YYYY)');
let dataPartida = moment(dataPartidaInformada, "DD/MM/YYYY");

let dataAtual = moment();

let diferencaData = dataPartida - dataAtual;
let escolhaFormato = prompt('Escolha como gostaria de exibir o tempo de partida\n 1 - Segundos\n 2 - Minutos\n 3 - Horas\n 4 - Dias')

if (escolhaFormato == 1) {
    let segundosDePartida = Math.round(diferencaData / 1000);
    window.alert(`Tempo de vôo: ${segundosDePartida} segundos`)
} else if (escolhaFormato == 2) {
    let minutosDepartida = Math.round(diferencaData / 1000 / 60)
    window.alert(`Tempo de vôo: ${segundosDePartida} minutos`)
}
else if (escolhaFormato == 3) {
    let horasDePartida = Math.round(diferencaData / 1000 / 3600)
    window.alert(`Tempo de vôo: ${horasDePartida} horas`)
}
else if (escolhaFormato == 4) {
    let diasDePartida = Math.round(diferencaData / 1000 / 3600 / 24)
    window.alert(`Tempo de vôo: ${diasDePartida} dias`)
} else{
    window.alert(`Opção inválida!`)
}