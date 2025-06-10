import { products } from "./productsData.js";

// Obter o ID do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Buscar o produto correspondente
const produtoSelecionado = products.find(p => p.id === productId);

  // Criar e injetar HTML com os dados do produto
  document.body.innerHTML += `
    <main class="container">
      <section class="venda" id="telaVenda">
        <h2>Venda de Produto</h2>


        <label for="tipoPagamento">Tipo de Pagamento:</label>
        <input type="text" id="tipoPagamento" placeholder="Ex: Cartão, Pix, Boleto" />

        <label for="dataPagamento">Data da Venda:</label>
        <input type="date" id="dataPagamento" />

        <label for="quantidadeVenda">Quantidade Vendida:</label>
        <input type="number" id="quantidadeVenda" placeholder="Quantidade" min="1" />

        <button id="btnConfirmarVenda">Confirmar Venda</button>
      </section>
    </main>
  `;

  // Aguardar clique no botão e atualizar dados
  document.getElementById('btnConfirmarVenda').addEventListener('click', () => {
    const quantidadeVenda = parseInt(document.getElementById('quantidadeVenda').value);

    if (!quantidadeVenda || quantidadeVenda <= 0) {
      alert("Informe uma quantidade válida.");
      return;
    }

    if (quantidadeVenda > produtoSelecionado.quantity) {
      alert("Quantidade maior que a quantidade disponível no estoque");
      return;
    }

    produtoSelecionado.quantity -= quantidadeVenda;

    alert(`Venda realizada! Quantidade restante: ${produtoSelecionado.quantity}`);
    window.location.href = "produtosCadastrados.html";

    //<p><strong>Nome atual:</strong> ${produtoSelecionado.name}</p> Nome produto
    //<p><strong>Quantidade atual:</strong> ${produtoSelecionado.quantity}</p> Quantidade produto
    //Necessário atualizar estoque
  });
