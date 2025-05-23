document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita envio real do formulário
  
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const dados = {
      nome,
      telefone,
      cpf,
      dataNascimento,
      email,
      senha
    };
  
    console.log("Dados do formulário:", dados);
  
    // Exemplo: enviar para um servidor usando fetch()
    /*
    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Erro ao cadastrar:", err));
    */
  });
  