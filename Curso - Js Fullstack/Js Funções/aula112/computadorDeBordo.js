window.alert('Olá, a nave está a 150km/s')


const desacelerar = (velocidade, mostrarVelocidade) => {
    mostrarVelocidade('Reduzindo a nave para pouso, aguarde...')

    //usar while seria uma melhor opção, pois só seria while(velocidade > 0), quando chegasse a 0 pararia
    for (let i = 0; i < 7; i++) {
        velocidade -= 20; //atribuir variável pra desaceleração, ao invés de 20
        mostrarVelocidade(`A nave está a ${velocidade}km/s`)
        
    }
    mostrarVelocidade('A nave está a 0km/s, Abrindo portas, podem se retirar da nave')

}

//atribuir variável ao invés dos 150
desacelerar(150, (mensagem) => {
    window.alert(mensagem)
})
