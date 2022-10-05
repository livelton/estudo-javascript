function verificarMarcado(){
    //pegando o valor do select, não da opção
    let opcao = document.querySelector('select').value
    let input = document.querySelector('#texto')
    let par = document.querySelector('#mensagem')

    if(opcao === 'disabled'){
        input.disabled = true;
        par.textContent = 'DESABILITADO'
        par.style.backgroundColor = 'red'
        par.style.color = 'white'
    }else{
        //else, pq se não tiver o valor não reseta e se tiver valor não muda
        input.disabled = false;
        input.value = ''
        par.textContent = ''
        par.style.backgroundColor = 'transparent'
        par.style.color = 'white'
    }
}