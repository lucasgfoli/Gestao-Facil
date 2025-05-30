const form = document.querySelector('form');
const productName = document.querySelector('.js-nome-produto');
const productCategory = document.querySelector('.js-categoria');
const productQuantity = document.querySelector('.js-quantidade');
const productPrice = document.querySelector('.js-preco');
const supplierName = document.querySelector('.js-fornecedor');
const expirationDate = document.querySelector('.js-data-validade');

console.log('Script carregado e elementos selecionados:', form, productName);

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão e o redirecionamento

    const produto = {
        id: Date.now().toString(), // Geração simples de ID único
        name: productName.value,
        category: productCategory.value,
        quantity: parseInt(productQuantity.value),
        price: parseFloat(productPrice.value),
        fornecedorName: supplierName.value,
        dateExpiration: expirationDate.value
    };

    alert('Produto cadastrado com sucesso!\n\n' + JSON.stringify(produto, null, 2));
    console.log(produto);
});