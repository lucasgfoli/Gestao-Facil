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
        
    <div class="product-sell">
      <div class="product-container">
        <label for="tipoPagamento">Informações do Produto:</label>
        <h3>Produto: ${produtoSelecionado.name}</h3>
        <p><strong>Categoria:</strong> ${produtoSelecionado.category}</p>
        <p><strong>Preço:</strong> <p>R$${produtoSelecionado.price.toFixed(2)}</p>
        <p><strong>Fornecedor:</strong> ${produtoSelecionado.fornecedorName}</p>
        <p><strong>Validade:</strong> ${produtoSelecionado.dateExpiration}</p>
        <p><strong>Quantidade atual:</strong> ${produtoSelecionado.quantity}</p>
      </div>

        <div class="client-container">
        <label for="tipoPagamento">Tipo de Pagamento:</label>
        <select id="tipoPagamento" required>
        <option value="" disabled selected>Selecione o tipo de pagamento</option>
        <option value = "credit-card">Cartão de crédito</option>
        <option value = "debit-card">Cartão de débito</option>
        <option value = "dinheiro">Dinheiro</option>
        <option value = "PIX">PIX</option>
        <option value = "boleto">Boleto Bancário</option>
        </select>
  
        <label for="dataPagamento">Data da Venda:</label>
        <input type="date" id="dataPagamento" />

        <label for="quantidadeVenda">Quantidade Vendida:</label>
        <input type="number" id="quantidadeVenda" placeholder="Quantidade" min="1" />

        <button id="btnConfirmarVenda">Confirmar Venda</button>
      </div>
    </div>
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

    
  });
