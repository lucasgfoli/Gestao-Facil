// Formulário de login manual
const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const forgotPassword = document.getElementById('forgotPassword');

// Banco de dados mock
const users = [
    { email: 'usuario@empresa.com', senha: '123456' },
    { email: 'admin@gestao.com', senha: 'admin123' }
];

// Login manual
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value.trim();

    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
        errorMsg.textContent = '';
        alert('Login bem-sucedido!');
        window.location.href = 'painel.html';
    } else {
        errorMsg.textContent = 'E-mail ou senha incorretos.';
    }
});

// Recuperação de senha manual
forgotPassword.addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt('Digite seu e-mail para recuperar sua senha:');
    const user = users.find(u => u.email === email);

    if (user) {
        alert(`Um link para redefinir sua senha foi enviado para ${email}`);
    } else {
        alert('E-mail não encontrado.');
    }
});



//  Integração com Google Login

// Firebase CFG
const firebaseConfig = {
   apiKey: "AIzaSyDQJebLHoFR7x3ZpjH8MMsan487Trp8oxk",
    authDomain: "gestao-facil-2025.firebaseapp.com",
    projectId: "gestao-facil-2025",
    storageBucket: "gestao-facil-2025.firebasestorage.app",
    messagingSenderId: "1061087512052",
    appId: "1:1061087512052:web:3396e65e6c9435a24da5a1",
    measurementId: "G-B5FVCP951R"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Autenticação
const auth = firebase.auth();
const googleButton = document.querySelector('.btn-google');

// Evento de clique no botão Google
googleButton.addEventListener('click', function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            alert(`Login com Google bem-sucedido! Bem-vindo, ${user.displayName}`);
            window.location.href = 'painel.html'; // Redireciona para o painel após login
        })
        .catch((error) => {
            console.error(error);
            alert('Erro no login com Google: ' + error.message);
        });
});

function showPopup(message) {
    const popup = document.getElementById('customPopup');
    const messageElement = document.getElementById('popupMessage');
    messageElement.textContent = message;
    popup.classList.remove('hidden');
}

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('customPopup').classList.add('hidden');
});
