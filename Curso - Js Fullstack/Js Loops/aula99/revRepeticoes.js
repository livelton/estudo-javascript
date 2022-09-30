const nomeDaNave = prompt('Digite o nome da nave');
let k = nomeDaNave.length - 1;
let nomeInvertido = "";

do {
    if(nomeDaNave[k] == 'e'){
        break;
    }
    nomeInvertido += nomeDaNave[k]
    k--;
    
} while (k >= 0)

window.alert(nomeInvertido);
window.alert(`Antigo nome da nave: ${nomeDaNave}\nNome invertido da nave: ${nomeInvertido}`)

