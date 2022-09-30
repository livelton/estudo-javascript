window.alert('Olá, bem-vindo a Millenium Falcon!')

let nomePiloto = window.prompt('Digite o seu nome');
let velocidade = 0;
let acelerarNave = window.prompt(`${nomePiloto}, você quer acelerar a nave em quantos Km/s?`)
velocidade = velocidade + Number(acelerarNave);
let confirmacao = window.alert(`Você está a ${velocidade}km/h, está ciente disso?`);

if(velocidade < 0){
    window.alert('Nave parada')
} else if(velocidade < 40){
    window.alert('Você está devagar, podemos aumentar mais')
}
else if(velocidade >= 40 && velocidade < 80){
    window.alert('Parece uma boa velocidade para manter')
}
else if(velocidade >= 80 && velocidade < 100){
    window.alert('Velocidade alta, considere diminuir')
}
else if(velocidade >= 100){
    window.alert('Velocidade perigosa, Controle automático forçado')
}

let final = window.alert(`${nomePiloto}, você está a ${velocidade}Km/s`)