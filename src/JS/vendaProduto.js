const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`https://gestao-facil-1.onrender.com/produto/${productId}`)
  .then(res => res.json())
  .then(produtoSelecionado => {
    if (!produtoSelecionado) {
      document.body.innerHTML = '<p>Produto não encontrado.</p>';
      return;
    }

    document.body.innerHTML += `
      <main class="container">
        <section class="venda" id="telaVenda">
          <h2>Venda de Produto</h2>

          <div class="product-sell">
            <div class="product-container">
              <h3>Produto: ${produtoSelecionado.nome}</h3>
              <p><strong>Categoria:</strong> ${produtoSelecionado.categoria}</p>
              <p><strong>Preço:</strong> R$${parseFloat(produtoSelecionado.preco).toFixed(2)}</p>
              <p><strong>Fornecedor:</strong> ${produtoSelecionado.nome_fornecedor}</p>
              <p><strong>Validade:</strong> ${produtoSelecionado.data_validade}</p>
              <p><strong>Quantidade atual:</strong> <span id="quantidadeAtual">${produtoSelecionado.quantidade}</span></p>
            </div>

            <div class="client-container">
              <label for="tipoPagamento">Tipo de Pagamento:</label>
              <select id="tipoPagamento" required>
                <option value="" disabled selected>Selecione o tipo de pagamento</option>
                <option value="credit-card">Cartão de crédito</option>
                <option value="debit-card">Cartão de débito</option>
                <option value="dinheiro">Dinheiro</option>
                <option value="PIX">PIX</option>
                <option value="boleto">Boleto Bancário</option>
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

    document.getElementById('btnConfirmarVenda').addEventListener('click', () => {
      const quantidadeVenda = parseInt(document.getElementById('quantidadeVenda').value);

      if (!quantidadeVenda || quantidadeVenda <= 0) {
        alert("Informe uma quantidade válida.");
        return;
      }

      if (quantidadeVenda > produtoSelecionado.quantidade) {
        alert("Quantidade maior que o estoque disponível.");
        return;
      }

      const novaQuantidade = produtoSelecionado.quantidade - quantidadeVenda;

      fetch(`https://gestao-facil-1.onrender.com/produto/${productId}/quantidade`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ novaQuantidade })
      })
        .then(res => {
          if (res.ok) {
            alert(`Venda realizada! Quantidade restante: ${novaQuantidade}`);
            window.location.href = "produtosCadastrados.html";
          } else {
            alert("Erro ao registrar a venda.");
          }
        })
        .catch(() => {
          alert("Erro na conexão com o servidor.");
        });
    });
  })
  .catch(err => {
    console.error('Erro ao buscar produto:', err);
    document.body.innerHTML = '<p>Erro ao buscar produto.</p>';
  });
