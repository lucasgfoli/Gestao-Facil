const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Buscar o produto no backend
fetch(`http://localhost:8080/produtos/${productId}`)
  .then(res => res.json())
  .then(produto => {
    if (!produto) {
      document.body.innerHTML = '<p>Produto não encontrado.</p>';
      return;
    }

    // Preencher os campos visuais
    document.querySelector('.js-nome-produto').textContent = produto.nome;
    document.querySelector('.js-categoria').textContent = produto.categoria;
    document.querySelector('.js-preco').textContent = parseFloat(produto.preco).toFixed(2);
    document.querySelector('.js-fornecedor').textContent = produto.nome_fornecedor;
    document.querySelector('.js-data-validade').textContent = produto.data_validade;
    document.querySelector('.js-quantidade').textContent = produto.quantidade;

    // Preencher inputs do formulário
    document.getElementById('edit-name').value = produto.nome;
    document.getElementById('edit-category').value = produto.categoria;
    document.getElementById('edit-price').value = produto.preco;
    document.getElementById('edit-quantity').value = produto.quantidade;
    document.getElementById('edit-expiration').value = produto.data_validade;
    document.getElementById('edit-supplier').value = produto.nome_fornecedor;
    document.getElementById('edit-image').value = produto.imagem || '';
    
    // Envio do PUT
    document.getElementById('form-edicao').addEventListener('submit', (event) => {
      event.preventDefault();

      const produtoAtualizado = {
        nome: document.getElementById('edit-name').value,
        categoria: document.getElementById('edit-category').value,
        preco: parseFloat(document.getElementById('edit-price').value),
        quantidade: parseInt(document.getElementById('edit-quantity').value),
        data_validade: document.getElementById('edit-expiration').value,
        nome_fornecedor: document.getElementById('edit-supplier').value,
        imagem: document.getElementById('edit-image').value
      };

      fetch(`http://localhost:8080/produtos/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoAtualizado)
      })
      .then(res => {
        if (res.ok) {
          alert('Produto atualizado com sucesso!');
          window.location.href = 'produtosCadastrados.html';
        } else {
          alert('Erro ao atualizar produto.');
        }
      });
    });
  })
  .catch(err => {
    console.error('Erro ao buscar produto:', err);
    document.body.innerHTML = '<p>Erro ao buscar produto.</p>';
  });
