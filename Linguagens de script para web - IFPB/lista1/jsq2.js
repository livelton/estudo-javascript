let button = document.querySelector('button');
var n1 = document.querySelector('input#n1');
var n2 = document.querySelector('input#n2');
//itens selecionados

//função             param, retr exibnum  potencia  valor1  valor2
const calcularPotencia = () => mostrarNum(Math.pow(n1.value, n2.value));
button.addEventListener('click', calcularPotencia)

//criar elemento e colocar ele dentro do body
let par = document.createElement('p');
document.body.appendChild(par);
//função de mostrar elemento
let mostrarNum = (result) => par.textContent = result;

