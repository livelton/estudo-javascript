let itens = [];

function adicionarItem(item) {
  if (localStorage.getItem('itensGuardados') === null) {
    localStorage.itensGuardados = JSON.stringify([]);
    itens = JSON.parse(localStorage.getItem('itensGuardados'));
    itens.push(item);
    localStorage.itensGuardados = JSON.stringify(itens);

  }
  else {
    itens = JSON.parse(localStorage.getItem('itensGuardados'));
    itens.push(item);
    localStorage.itensGuardados = JSON.stringify(itens);
    console.log(itens)
  }

}

function listarItens() {
  return JSON.parse(localStorage.itensGuardados);
}

function removerItens(indice) {
  itens.splice(indice, 1);
  const itensGuardados = JSON.parse(localStorage.getItem('itensGuardados'))
  itensGuardados.splice(indice, 1);
  localStorage.itensGuardados = JSON.stringify(itensGuardados);
}



export { adicionarItem, listarItens, removerItens };