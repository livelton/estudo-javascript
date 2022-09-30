import { adicionarItem, listarItens } from "./lista1.js";

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

  itens.forEach((item) => {
    const novaLinha = document.createElement("tr");
    const novaCelula = document.createElement("td");
    novaCelula.textContent = item;
    novaLinha.appendChild(novaCelula);
    corpoTabela.append(novaLinha);
  });
};