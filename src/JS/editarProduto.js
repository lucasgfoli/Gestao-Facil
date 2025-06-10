import { products } from "./productsData.js";

// Obter o ID do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Buscar o produto correspondente
const produtoSelecionado = products.find(p => p.id === productId);

if (!produtoSelecionado) {
  document.body.innerHTML = '<p>Produto não encontrado.</p>';
} else {
  // Criar e injetar HTML com os dados do produto
  document.body.innerHTML += `
    <main class="edit-container">
      <section class="edit" id="telaEditar">

      <div class="product-info";>
        <p class= "product-name";><strong>Nome atual:</strong> ${produtoSelecionado.name}</p>
        <p class= "product-quantity";><strong>Quantidade atual:</strong> ${produtoSelecionado.quantity}</p>
      </div>
        <label for="edit-name">Novo nome:</label>
        <input type="text" id="edit-name" value="${produtoSelecionado.name}"/>

        <label for="edit-quantity">Nova quantidade:</label>
        <input type="number" id="edit-quantity" value="${produtoSelecionado.quantity}" min="1" />

        <label for="edit-expiration">Nova data de validade:</label>
        <input type="date" id="edit-expiration" value="${produtoSelecionado.dateExpiration}" />

        <button id="btnConfirmarEdicao">Confirmar Edição</button>
      </section>
    </main>
  `;

  // Aguardar clique no botão e atualizar dados
  document.getElementById('btnConfirmarEdicao').addEventListener('click', () => {
    const novoNome = JSON.stringify(document.getElementById('edit-name').value);
    const novaQuantidade = parseInt(document.getElementById('edit-quantity').value);
    const novaValidade = document.getElementById('edit-expiration').value;

    if (!novaQuantidade || !novaValidade) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Atualizar os dados no array
    produtoSelecionado.name = novoNome;
    produtoSelecionado.quantity = novaQuantidade;
    produtoSelecionado.dateExpiration = novaValidade;

    alert("Produto atualizado com sucesso!");
    window.location.href = "produtosCadastrados.html";
  });
}