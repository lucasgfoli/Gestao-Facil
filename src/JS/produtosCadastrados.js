async function carregarProdutos() {
  try {
    const response = await fetch('https://gestao-facil-1.onrender.com/produto')
    if (!response.ok)
      throw new Error(`Erro ao buscar produtos: ${response.status}`)

    const products = await response.json()

    let productsHTML = '';

    products.forEach((product) => {
      productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.imagem || 'img/default.png'}" alt="${product.nome}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.nome}
          </div>

          <div class="product-category">
            Categoria: ${product.categoria}
          </div>

          <div class="product-price">
            Preço: R$${parseFloat(product.preco).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <label>Qtd: ${product.quantidade}</label>
          </div>

          <div class="product-supplier">
            Fornecedor: ${product.nome_fornecedor || 'Não informado'}
          </div>

          <div class="product-expiration">
            Validade: ${new Date(product.data_validade).toLocaleDateString('pt-BR')}
          </div>

          <a href="vendaProduto.html?id=${product.id_produto}" class="link-primary">
            Registrar Venda
          </a>
          <a href="editarProduto.html?id=${product.id_produto}" class="link-primary">
            Editar produto
          </a>
          <button class="btn-delete" data-id="${product.id_produto}">Deletar produto</button>

          <div class="product-spacer"></div>
        </div>
      `
    })

    document.querySelector('.js-product-list').innerHTML = productsHTML

  } catch (error) {
    console.error('Erro ao carregar produtos', error);
    document.querySelector('.js-product-list').innerHTML = '<p>Erro ao carregar produtos.</p>'
  }

  document.querySelectorAll('.btn-delete').forEach(button => {
    button.addEventListener('click', async (event) => {
      const productId = event.target.getAttribute('data-id')

      const confirma = confirm(`Tem certeza que deseja deletar o produto?`)

      if (!confirma) return

      try {
        const deleteResponse = await fetch(`${'https://gestao-facil-1.onrender.com/produtos'}/${productId}`, {
          method: 'delete',
        })

        if (deleteResponse.ok) {
          alert('Produto deletado com sucesso')
          carregarProdutos()
        } else {
          const errorMsg = await deleteResponse.text()
          console.error('Erro ao deletar produto:', errorMsg)
          alert('Erro ao deletar.')
        }
      } catch(error){
        console.error('erro ao deletar produto:', error)
      }

    }
  
  )
  })
}

carregarProdutos()