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
