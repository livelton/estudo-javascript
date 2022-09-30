let conjNum = document.querySelector('input');
let button = document.querySelector('button');

/*
function buscaValores() {
    let array = conjNum.value.split(",")
    array = array.map((numero) => {
        return Number(numero);
    });
    array.sort((a,b) => {
        if(a > b){
            return 1;
        }
        else if (a < b){
            return -1;
        }
        else{
            return 0;
        }
    })
    let tamanhoArray = array.length;
    let maiorNum = array[tamanhoArray - 1];
    let menorNum = array[0];
    mostrarMaior(maiorNum);
    mostrarMenor(menorNum);
    return conjNum.value
}
*/

function buscaValores() {
    let array = conjNum.value.split(",")
    mostrarMaior(Math.max(...array));
    mostrarMenor(Math.min(...array));
    return conjNum.value
}

button.addEventListener('click', buscaValores);

let parMaior = document.createElement('p');
document.body.appendChild(parMaior);

let parMenor = document.createElement('p');
document.body.appendChild(parMenor);

let mostrarMaior = (maior) => parMaior.textContent = (`O maior número é ${maior}`);
let mostrarMenor = (menor) => parMenor.textContent = (`O menor número é ${menor}`);