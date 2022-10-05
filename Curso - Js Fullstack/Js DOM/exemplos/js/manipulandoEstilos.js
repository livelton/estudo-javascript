//colocar o fundo azul
function setBlueBackground(){
    let fundo = document.querySelector('#estilo');
    fundo.style.backgroundColor = 'blue'
}

//colocar o fundo transparente
function setTransparentBackground(){
    let fundo = document.querySelector('#estilo');
    fundo.style.backgroundColor = 'transparent'
}

//agora dois métodos de adicionar e remover uma classe no documento
//primeiro adicionando a classe, que já está definida no HTML de modo <style>
function setRedColor(){
    let fundo = document.querySelector('#estilo');
    fundo.classList.add('cor-vermelha');
}

//add adiciona, remove remove.
function removeRedColor(){
    let fundo = document.querySelector('#estilo');
    fundo.classList.remove('cor-vermelha');
}

