const form = document.getElementById('cadastroForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const dados = {
    cnpj_usuario: document.getElementById('cnpj_usuario').value,
    nome: document.getElementById('nome').value,
    dataNascimento: document.getElementById('dataNascimento').value,
    telefone: document.getElementById('telefone').value,
    email: document.getElementById('email').value,
    senha: document.getElementById('senha').value,
  };

  try {
    const resposta = await fetch('https://gestao-facil-1.onrender.com/usuario/cadastrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });

    const resultado = await resposta.json();

    if (resposta.ok) {
      alert(resultado.mensagem);
      form.reset();
    } else {
      errorMsg.textContent = resultado.mensagem;
    }
  } catch (erro) {
    errorMsg.textContent = 'Erro ao enviar dados. Tente novamente.';
    console.error(erro);
  }
});
