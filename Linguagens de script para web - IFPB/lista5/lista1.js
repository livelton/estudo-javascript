const itens = [];

function adicionarItem(item) {
  itens.push(item);
}

function listarItens() {
  return itens;
}

export { adicionarItem, listarItens };