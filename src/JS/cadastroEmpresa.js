const form = document.getElementById('cadastroForm');
const feedbackMsg = document.getElementById('feedbackMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    if (senha !== confirmarSenha) {
        feedbackMsg.style.color = '#EF4444'; // vermelho de erro
        feedbackMsg.textContent = 'As senhas não coincidem.';
        return;
    }

    // Simulando cadastro bem-sucedido
    feedbackMsg.style.color = '#22C55E'; // verde de sucesso
    feedbackMsg.textContent = 'Cadastro realizado com sucesso!';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) 
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) 
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i);

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}
