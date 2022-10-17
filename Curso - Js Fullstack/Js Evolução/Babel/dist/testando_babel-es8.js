function testandoBabel(texto1, texto2) {
    alert(`${texto1}\n ${texto2}`);
}

let promise = Promise.resolve();

//através do npx babel .\testando_babel.js 
//a vírgula no último parâmetro foi removida, pois algumas funções do novo es não funcionam nos es antigos, então o babel corrigiu esse "erro" no script compilado

//OSERVE O SCRIPT COMPILADO