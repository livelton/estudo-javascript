testandoFuncoes = {
    nome: 'Testando',
    //a normal function respeita o escopo de onde ela está sendo chamada, já arrowfunction não, por isso tem que pensar bastante antes de escolhar qual vai ser utilizada.
    normalFunction: function(){
        console.log(this.nome);
    },
    arrowFunction: () => {
        console.log(this.nome);
    }
}

console.log('Normal function')
testandoFuncoes.normalFunction()
//saida : Testando

console.log('Arrow function')
testandoFuncoes.arrowFunction()
//saida : Undefined