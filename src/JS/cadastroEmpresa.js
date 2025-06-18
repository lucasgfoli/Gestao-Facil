document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const feedbackMsg = document.getElementById('feedbackMsg');
    const cnpjInput = document.getElementById('cnpj');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const cnpj = cnpjInput.value.trim();

        if (!validarCNPJ(cnpj)) {
            feedbackMsg.style.color = '#EF4444'; // vermelho de erro
            feedbackMsg.textContent = 'CNPJ inválido.';
            return;
        }

        const confirmar = confirm('Deseja realmente cadastrar esta empresa?');
        if (!confirmar) return;

        feedbackMsg.style.color = '#22C55E'; // verde de sucesso
        feedbackMsg.textContent = 'Cadastro realizado com sucesso!';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });

    cnpjInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

        if (value.length > 14) value = value.slice(0, 14); // Limita a 14 dígitos

        // Formata o CNPJ: 00.000.000/0000-00
        value = value.replace(/^(\d{2})(\d)/, '$1.$2');
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');

        e.target.value = value;
    });

    function validarCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

        let tamanho = 12;
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

        tamanho = 13;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) pos = 9;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        return resultado === parseInt(digitos.charAt(1));
    }

    $(document).ready(function() {
    $('.js-estado').select2({
        placeholder: "Selecione um estado",
        allowClear: true
    });
});

// TELEFONE - Máscara e validação
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value.length > 11) value = value.slice(0, 11); 

    // Máscara para (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    e.target.value = value;
});

// CEP - Máscara e validação
document.getElementById('cep').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value.length > 8) value = value.slice(0, 8); 

    // Máscara: 00000-000
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');

    e.target.value = value;
});


});
