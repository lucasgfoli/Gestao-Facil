import { products } from "./productsData.js";

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image || 'images/default.png'}" alt="${product.name}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-category">
        Categoria: ${product.category}
      </div>

      <div class="product-price">
        Preço: R$${product.price.toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <label>Qtd:
        ${product.quantity}
        </label>
      </div>

      <div class="product-supplier">
        Fornecedor: ${product.fornecedorName}
      </div>

      <div class="product-expiration">
        Validade: ${product.dateExpiration}
      </div>

      <a href="vendaProduto.html?id=${product.id}" class="link-primary">
        Registrar Venda
      </a>
      <a href="editarProduto.html?id=${product.id}" class="link-primary">
        Editar produto
      </a>


      <div class="product-spacer"></div>
    </div>
  `;
});

document.querySelector('.js-product-list').innerHTML = productsHTML;
