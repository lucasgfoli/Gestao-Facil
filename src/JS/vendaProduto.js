import { products } from "./productsData";

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const productId = getProductId();

const product = products.find(p => p.id == productId);


if(!product)
  alert("Produto não encontrado!");


function venderProduct() {
  const quantidadeVenda = parseInt(document.querySelector('.quantidadeVenda').value);

  if (quantidadeVenda > product.quantity){
    alert("Quantidade maior que a quantidade disponível no estoque");
    return;
  }

  product.quantity -= quantidadeVenda;
  alert(`Venda realizada! Quantidade restante: ${product.quantity}`);

}