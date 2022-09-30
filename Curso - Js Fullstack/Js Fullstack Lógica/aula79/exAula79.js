const nomeMaisVelha = document.querySelector('#nomeMaisVelha');
const nomeMaisNova = document.querySelector('#nomeMaisNova');
const idadeMaisVelha = document.querySelector('#idadeMaisVelha');
const idadeMaisNova = document.querySelector('#idadeMaisNova');
const button = document.querySelector('button');
const input = document.querySelector('input')

button.addEventListener('click', () => {
    let diferencaIdade = idadeMaisVelha.value - idadeMaisNova.value;

    if (nomeMaisNova.value === '' || nomeMaisVelha === '' || idadeMaisNova === '' || idadeMaisNova === '') {
        window.alert('Digite todas as informações antes de enviar')
    }
    else {
        window.alert(`${nomeMaisVelha.value} é a pessoa mais velha, sua idade é de ${idadeMaisVelha.value} anos\n${nomeMaisNova.value} é a pessoa mais nova, sua idade é de ${idadeMaisNova.value} anos\nA diferença de idade de ${nomeMaisVelha.value} e ${nomeMaisNova.value} é de ${diferencaIdade} anos`)
    }

})