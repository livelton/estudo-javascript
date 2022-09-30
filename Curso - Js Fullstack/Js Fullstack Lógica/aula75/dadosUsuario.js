window.alert('Bem-vindo! A seguir pediremos que informe alguns dados');

let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let confIdade = document.querySelector('#confIdade')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    if (idade.value !== confIdade.value) {
        window.alert('Erro, a idade que você informou e a que você confirmou são diferentes')
    }
    else if (nome.value === '' || idade.value === '' || confIdade === '') {
        window.alert('Por favor, preencha todos os dados antes do envio')
    }
    else {
        window.alert(`Seu nome é ${nome.value}, sua idade é ${idade.value}. Você confirmou corretamente sua idade!`)
    }
})
