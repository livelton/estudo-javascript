function mostrarInfo() {
    //pegando nome e cor do user
    let nome = document.querySelector('#nome')
    let cor = document.querySelector('#cor')

    //o checked verificará quais opções estão selecionadas pelo usuário
    let gostaDeProgramar = document.querySelector('#like-programming:checked')
    let linguagens = document.querySelectorAll('#developer-options:checked')

    //um array vazio para armazenar as linguagens selecionadas
    let linguagensSelecionadas = []

    //percorrer o array linguagens, passando o que foi selecionado para o array vazio acima
    linguagens.forEach((selecionado => {
        linguagensSelecionadas.push(selecionado.value)
    }))

    //transformando em string para exibir no alert
    linguagensSelecionadas.join(', ')

    //essa implementação é pra deixar legível no alert se a pessoa gosta ou não de programar
    let gosto;

    if(gostaDeProgramar.value === 'Sim'){
        gosto = 'gosta'
    }

    if(gostaDeProgramar.value === 'Não'){
        gosto = 'não gosta'
    }

    //por fim, o alert com todos os dados! :)
    alert(`Olá, ${nome.value}!
    Sua cor primária é ${cor.value}
    Você ${gosto} de programar
    As linguagens que você conhece são ${linguagensSelecionadas}`)

}