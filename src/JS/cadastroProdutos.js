const form = document.querySelector('form');

const productName = document.querySelector('.js-nome-produto');
const productQuantity = document.querySelector('.js-quantidade');
const supplierName = document.querySelector('.js-fornecedor');
const expirationDate = document.querySelector('.js-data-validade');
const submitButton = document.querySelector('.submit-button');
// Campos adicionais (adicione no HTML se quiser)
const productCategory = document.querySelector('.js-categoria');
const productPrice = document.querySelector('.js-preco');


submitButton.addEventListener('click', async function(event) {
  event.preventDefault();

  const produto = {
    nome: productName.value,
    quantidade: parseInt(productQuantity.value),
    nome_fornecedor: supplierName.value,
    data_validade: expirationDate.value,
    categoria: productCategory?.value || 'Outros',
    preco: parseFloat(productPrice?.value) || 0.0,
    id_fornecedor: 1,
    imagem: null 
  };

  try {
    const response = await fetch('http://localhost:8080/produtos/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)
    });

    const resultado = await response.json();

    if (response.ok) {
      alert('Produto cadastrado com sucesso!');
      form.reset();
      window.history.back()
    } else {
      alert(`Erro ao cadastrar produto: ${resultado.erro || 'Erro desconhecido'}`);
    }

  } catch (erro) {
    console.error('Erro na requisição:', erro);
    alert('Erro de conexão com o servidor.');
  }
});
