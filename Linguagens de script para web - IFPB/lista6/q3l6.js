const comboBox = document.querySelector("#decadas");
const listaOrdenada = document.querySelector("ol");

comboBox.addEventListener("change", (evento) => {
  const decadaSelecionada = evento.target.value;
  const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${decadaSelecionada}`;
  fetch(url)
    .then((resposta) => resposta.json())
    .then((jsonResposta) => {
      const ranking = jsonResposta[0].res;
      const itensLista = ranking.map((posicaoRank) => {
        const itemLista = document.createElement("li");
        itemLista.textContent = posicaoRank.nome;
        return itemLista;
      });
      listaOrdenada.replaceChildren(...itensLista);
    });
});