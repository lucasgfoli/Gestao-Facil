const form = document.querySelector('form');
const productName = document.querySelector('.js-nome-produto');
const productQuantity = document.querySelector('.js-quantidade');
const supplierName = document.querySelector('.js-fornecedor');
const receivedDate = document.querySelector('.js-data-recebimento');
const expirationDate = document.querySelector('.js-data-validade');

console.log('Script carregado e elementos selecionados:', form, productName);

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão e o redirecionamento

    const produto = {
        nomeProduto: productName.value,
        quantidade: productQuantity.value,
        fornecedor: supplierName.value,
        dataRecebimento: receivedDate.value,
        dataValidade: expirationDate.value
    };

    alert('Produto cadastrado com sucesso!\n\n' + JSON.stringify(produto, null, 2));
    console.log(produto);
});