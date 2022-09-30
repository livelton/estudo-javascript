let temp = document.querySelector('#input-celsius');
let fSpan = document.querySelector('#temp-fahrenheit');
let kSpan = document.querySelector('#temp-kelvin');

fSpan.textContent = 'Digite um valor'
kSpan.textContent = 'Digite um valor'
//texto pedir um valor para o usuário


const converteTemp = () => {
    if (temp.value == '') {
        fSpan.textContent = 'Digite um valor'
        kSpan.textContent = 'Digite um valor'
        //se o temp.value tiver vazio, pedir pra digitar um valor
    }
    else {
        mostrarTemp(fahrenheit(), tF); //função mostrartemperatura passando fahrenheit, resultado da função será armazenado em tF
        mostrarTemp(kelvin(), tK);
    }
}

temp.addEventListener('keyup', converteTemp) //event listener é o temp, vai ser passado o converTemp no keyup

function fahrenheit() {
    return (Number(temp.value) * 9 / 5) + 32;
}

function kelvin() {
    return Number(temp.value) + 273.15;
}

//criar elemento e colocar ele dentro do body
let tF = document.querySelector('#temp-fahrenheit');
let tK = document.querySelector('#temp-kelvin');

//função de mostrar elemento
let mostrarTemp = (result, p) => {
    p.textContent = result;
}