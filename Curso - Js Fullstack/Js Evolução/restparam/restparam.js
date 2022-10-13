
//colocar o operador spread em nomes
//o parametro nomes vai receber todos os parametros restantes na chamada da função
//o spread precisa ser o último parâmetro da função
function saudar(mensagem, ...nomes){
    nomes.forEach(nome => console.log(`${mensagem}, ${nome}`))
    //nomes será um array, então para cada elemento do array, será exibido a mensagem junto do nome que está em uma posição determinada
}

saudar('Olá, bem-vindo', 'Elivelton', 'Murilo', 'Wanderson')