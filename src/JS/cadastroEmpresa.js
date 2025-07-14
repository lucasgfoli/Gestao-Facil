document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  const feedBackMsg = document.getElementById('feedbackMsg');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cnpj = document.getElementById('cnpj').value.trim();

    const dadosEmpresa = {
      nome: document.getElementById('nome').value.trim(),
      cnpj: cnpj,
      site: document.getElementById('site').value.trim(),
      email: document.getElementById('email').value.trim(),
      telefone: document.getElementById('telefone').value.trim(),
      endereco: document.getElementById('endereco').value.trim(),
      estado: document.getElementById('estado').value.trim(),
      cep: document.getElementById('cep').value.trim()
    };

    if (!validarCNPJ(cnpj)) {
      feedBackMsg.textContent = 'CNPJ Inválido!';
      feedBackMsg.style.color = '#EF4444';
      return;
    }

    try {
      const resposta = await fetch('https://gestao-facil-1.onrender.com/empresa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosEmpresa)
      });

      if (!resposta.ok) throw new Error('Erro ao cadastrar empresa');

      feedBackMsg.style.color = '#22C55E';
      feedBackMsg.textContent = 'Empresa cadastrada com sucesso!';
      form.reset();
    } catch (erro) {
      feedBackMsg.style.color = '#EF4444';
      feedBackMsg.textContent = 'Erro ao cadastrar empresa.';
      console.error(erro);
    }
  });
});

function validarCNPJ(cnpj) {
    // Remove qualquer caractere que não seja número
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') return false;

    if (cnpj.length !== 14) return false;

    // Elimina CNPJs inválidos conhecidos (ex: todos os dígitos iguais)
    if (/^(\d)\1{13}$/.test(cnpj)) return false;

    // Validação dos dígitos verificadores
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    // Validação do segundo dígito
    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) return false;

    return true;
}
