const inputDesc = document.querySelector("#desc");
const inputValor = document.querySelector("#valor");

const botaoAdd = document.querySelector("button");

class Transacao {
  constructor(descricao, valor) {
    this.descricao = descricao;
    this.valor = valor;
  }
}

const transacoes = [];

botaoAdd.addEventListener("click", () => {
  const desc = inputDesc.value;
  const valor = parseFloat(inputValor.value);
  if (valor !== 0) {
    const novaTransacao = new Transacao(desc, valor);
    transacoes.push(novaTransacao);
    adicionarTransacaoTabela(novaTransacao);
    atualizarTotalTabela();
  }
});

const adicionarTransacaoTabela = (transacao) => {
  const corpoTabela = document.querySelector("tbody");
  const novaLinha = document.createElement("tr");
  const celulaDescricao = document.createElement("td");
  celulaDescricao.textContent = transacao.descricao;

  const celulaValor = document.createElement("td");
  celulaValor.textContent = transacao.valor;
  if (transacao.valor > 0) {
    celulaValor.classList.add("positivo");
  } else celulaValor.classList.add("negativo");

  novaLinha.appendChild(celulaDescricao);
  novaLinha.appendChild(celulaValor);
  corpoTabela.appendChild(novaLinha);
};

const atualizarTotalTabela = () => {
  let valorTotal = transacoes.reduce((valorAnterior, transacaoAtual) => {
    return valorAnterior + transacaoAtual.valor;
  }, 0);
  const spanTotal = document.querySelector("#total");
  spanTotal.textContent = valorTotal;
};