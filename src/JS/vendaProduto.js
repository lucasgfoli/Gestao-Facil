const listaEstoque = document.getElementById("listaEstoque");

const nomeProdutoVendaInput = document.getElementById("nomeProdutoVenda");
const tipoPagamentoInput = document.getElementById("tipoPagamento");
const dataPagamentoInput = document.getElementById("dataPagamento");
const quantidadeVendaInput = document.getElementById("quantidadeVenda");
const btnConfirmarVenda = document.getElementById("btnConfirmarVenda");

let estoque = [
  { nome: "Produto A", quantidade: 10 },
  { nome: "Produto B", quantidade: 5 },
  { nome: "Produto C", quantidade: 15 }
];

function atualizarEstoque() {
  listaEstoque.innerHTML = "";

  estoque.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "produto";

    div.innerHTML = `
      <span>${item.nome} - Qtd: ${item.quantidade}</span>
      <div>
        <button class="btn-vender" onclick="abrirTelaVenda(${index})">Vender</button>
        <button class="btn-editar" onclick="editarProduto(${index})">Editar</button>
        <button class="btn-excluir" onclick="excluirProduto(${index})">Excluir</button>
      </div>
    `;

    listaEstoque.appendChild(div);
  });
}

function abrirTelaVenda(index) {
  const produto = estoque[index];

  nomeProdutoVendaInput.value = produto.nome;
  nomeProdutoVendaInput.dataset.index = index;
  tipoPagamentoInput.value = "";
  dataPagamentoInput.value = "";
  quantidadeVendaInput.value = "";
}

btnConfirmarVenda.addEventListener("click", () => {
  const index = parseInt(nomeProdutoVendaInput.dataset.index);
  const quantidadeVendida = parseInt(quantidadeVendaInput.value);
  const tipoPagamento = tipoPagamentoInput.value.trim();
  const data = dataPagamentoInput.value;

  if (
    isNaN(quantidadeVendida) || quantidadeVendida <= 0 ||
    tipoPagamento === "" || data === ""
  ) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const quantidadeDisponivel = estoque[index].quantidade;

  if (quantidadeVendida > quantidadeDisponivel) {
    alert(`Você não tem estoque suficiente! Disponível: ${quantidadeDisponivel}`);
    return;
  }

  estoque[index].quantidade -= quantidadeVendida;
  atualizarEstoque();

  alert("Venda confirmada! Estoque atualizado.");
});

function excluirProduto(index) {
  const confirmar = confirm(`Deseja excluir o produto "${estoque[index].nome}"?`);
  if (confirmar) {
    estoque.splice(index, 1);
    atualizarEstoque();
    alert("Produto excluído com sucesso.");
  }
}

function editarProduto(index) {
  const novaQtd = prompt(`Digite nova quantidade para "${estoque[index].nome}":`, estoque[index].quantidade);
  const novaQuantidade = parseInt(novaQtd);

  if (!isNaN(novaQuantidade) && novaQuantidade >= 0) {
    estoque[index].quantidade = novaQuantidade;
    atualizarEstoque();
    alert("Quantidade atualizada com sucesso.");
  } else {
    alert("Valor inválido.");
  }
}

window.abrirTelaVenda = abrirTelaVenda;
window.excluirProduto = excluirProduto;
window.editarProduto = editarProduto;

atualizarEstoque();
