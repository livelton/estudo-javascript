let button = document.querySelector('button')
let cepInformado = document.querySelector('input')
let exibirCEP = document.querySelector('#exibirCEP')
let arrayCidades = []

button.addEventListener("click", () => {
  const CEP = cepInformado.value
  const url = `https://api.postmon.com.br/v1/cep/${CEP}`;
  console.log(url)
  fetch(url)
    .then((resposta) => resposta.json())
    .then((jsonResposta) => {
      const cidade = jsonResposta;
      arrayCidades.push(cidade)
      console.log(arrayCidades)
      const par = document.createElement('p');
      const mostrarCEP = arrayCidades.map((cep) => {  
        par.textContent = cep.cidade;
        return par;
      });
      exibirCEP.replaceChildren(...mostrarCEP);
    });
});