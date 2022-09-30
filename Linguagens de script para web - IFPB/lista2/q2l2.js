const botao = document.querySelector('button');
const funcionario = document.querySelector('#funcionario')
const salario = document.querySelector('#salario')
const listaFuncionarios = []; //array vazio


function registraFuncionario() {
    //objeto com o novofuncionario
    const novoFuncionario = {
        nome: funcionario.value,
        salario: salario.value
    };
    //colocar o objeto dentro do array
    listaFuncionarios.push(novoFuncionario);

    //chama a função exibirfuncionario
    exibirFuncionario()
    maiorSalario()
    exibirMaiorSalario()
    somarSalario()
    exibirTotalPago()

    //reseta os valores
    funcionario.value = '';
    salario.value = '';

    //retorna a listafuncionarios preenchida
    return listaFuncionarios;
}

//chama a função quando o botão for apertado
botao.addEventListener('click', registraFuncionario);


//exibe os funcionarios
function exibirFuncionario() {

    // //cria uma div e coloca no body
    let divFuncionarios = document.querySelector('#funcionarios')

    //cria um parágrafo e coloca dentro da div
    let paragrafo = document.createElement('p');
    divFuncionarios.appendChild(paragrafo);

    //para cada item dentro da lista de funcionarios
    listaFuncionarios.forEach((funcionario) => {
        //preenche o conteúdo com nome e salário do funcionário
        paragrafo.textContent = `Funcionário: ${funcionario.nome} - Salário: R$ ${funcionario.salario}`;
    });
}


//     let divMaiorSalarioTitulo = document.createElement('div');
//     document.body.appendChild(divMaiorSalarioTitulo);
//     let tituloMaiorSalario = document.createElement('h1');
//     divMaiorSalarioTitulo.appendChild(tituloMaiorSalario);
//     //preenchi os textos com o titulo e exibindo o nome e salário no parágrafo
//     tituloMaiorSalario.textContent = `Funcionário com maior salário`


// function exibirMaiorSalario(){
//     //o retorno da função será atribuido a variável exibirMaiorSalario
//     let exibirMaiorSalario = maiorSalario();
//     //Criei uma div e coloquei dentro do body
//     let divMaiorSalario = document.createElement('div');
//     document.body.appendChild(divMaiorSalario);
//     //um h1 pra titulo e um parágrafo para exibir o resultado
//     let paragrafoMaiorSalario = document.createElement('p');
//     divMaiorSalario.appendChild(paragrafoMaiorSalario);
//     paragrafoMaiorSalario.textContent = `${exibirMaiorSalario.nome} - R$ ${exibirMaiorSalario.salario}`;
// }


function exibirMaiorSalario() {
    const exibirMaiorSalario = maiorSalario();
    const divFuncionarioMaiorSalario = document.querySelector("#maiorsalario")
    divFuncionarioMaiorSalario.textContent = `${exibirMaiorSalario.nome} - R$ ${exibirMaiorSalario.salario}`;
  }  


function maiorSalario() {
    //nome começando em null e salário começando em 0
    let nomeMaiorSalario = null;
    let maiorSalario = 0
    // para cada funcionário, será executado o if
    listaFuncionarios.forEach((funcionario) => {
        //se o salário do funcionário for maior que o maior salário, que começa em 0
        if (funcionario.salario > maiorSalario) {
            //o nome e o salário será atribuido
            nomeMaiorSalario = funcionario;
            maiorSalario = funcionario.salario
        }

    })
    return nomeMaiorSalario;
}

function exibirTotalPago(){
    let totalFinal = somarSalario()
    const divPago = document.querySelector('#somaFinal')
    const salarioPar = document.querySelector('#paragrafoSoma')
    divPago.appendChild(salarioPar);
    salarioPar.textContent = `R$ ${totalFinal}`
    
}


function somarSalario() {
      const somaFinal = listaFuncionarios.reduce(
        (salarioFinal, salarioAtual) => salarioFinal + parseFloat(salarioAtual.salario), 0
      );
      console.log(somaFinal);
      return somaFinal;
}

