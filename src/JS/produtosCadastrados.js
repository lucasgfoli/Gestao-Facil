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
          <select class="js-select-value js-quantity-selector-${product.id}">
            ${[...Array(10).keys()].map(i => `
              <option value="${i + 1}" ${i === 0 ? 'selected' : ''}>${i + 1}</option>
            `).join('')}
          </select>
        </label>
      </div>

      <div class="product-supplier">
        Fornecedor: ${product.fornecedorName}
      </div>

      <div class="product-expiration">
        Validade: ${product.dateExpiration}
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-${product.id}" style="display: none;">
        <img src="images/icons/checkmark.png" alt="Checkmark">
        Adicionado
      </div>
    </div>
  `;
});


document.querySelector('.js-product-list').innerHTML = productsHTML;