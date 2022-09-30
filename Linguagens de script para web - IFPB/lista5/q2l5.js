import { adicionarItem, listarItens, removerItens } from "./lista2.js";

const inputDesc = document.querySelector("#desc-item");
const buttonAdd = document.querySelector("button");



buttonAdd.addEventListener("click", () => {
  const desc = inputDesc.value;
  adicionarItem(desc);
  atualizarTabela();
  
});

const atualizarTabela = () => {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = "";
  const itens = listarItens();

  itens.forEach((item, indice) => {

    const novaLinha = document.createElement("tr");
    const novaCelula = document.createElement("td");
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = 'remover';
    novaCelula.textContent = `${item} `;
    novaCelula.appendChild(botaoRemover);
    novaLinha.appendChild(novaCelula);
    corpoTabela.append(novaLinha);

    botaoRemover.addEventListener('click', (() => {
      removerItens(indice);
      atualizarTabela();
    }))
    
  });

};

window.addEventListener("load", atualizarTabela);

