let input = document.querySelector('#input');
//quando o value do input for mudado, vai ser chamado essa função
input.addEventListener('change', doChange);

//aqui vai instanciar o evento change, que poderá ser chamado no console
let mudarEvento = new Event('change');

// input.dispatchEvent(mudarEvento)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// vai chamar o evento change que está no input

//para remover um evento, nesse caso, é só dar input.removeEventListener('change', doChange)

//passando como parâmetro o event, para não dar como preterido
//o código funciona, porque event será global
function doChange(event){
    alert(event.target.value)
}

