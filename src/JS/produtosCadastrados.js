const API_URL = 'http://localhost:8080/produtos';

async function carregarProdutos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok)
      throw new Error(`Erro ao buscar produtos: ${response.status}`);

    const products = await response.json();

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

          <div class="product-spacer"></div>
        </div>
      `;
    });

    document.querySelector('.js-product-list').innerHTML = productsHTML;

  } catch (error) {
    console.error('Erro ao carregar produtos', error);
    document.querySelector('.js-product-list').innerHTML = '<p>Erro ao carregar produtos.</p>';
  }
}

carregarProdutos();