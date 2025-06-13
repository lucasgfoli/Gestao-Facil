import { empresas } from "./empresasData.js"; // Certifique-se de que o caminho e a extensão estão corretos

// Criar um container para as empresas
const container = document.createElement("div");
container.classList.add("empresas-cadastradas");

// Percorrer a lista de empresas e gerar o HTML para cada uma
empresas.forEach((empresa) => {
  container.innerHTML += `
    <div class="empresa">
        <h3>Empresa 1:</h3>
        <p><strong>Razão Social: </strong>${empresa.razaoSocial}</p>
        
        <p><strong>Site:</strong> <a href="${empresa.site}" target="_blank">${empresa.site}</a></p>
        <p><strong>Telefone:</strong> ${empresa.telefone}</p>
        <p><strong>Email:</strong> ${empresa.email}</p>
        <p><strong>CEP:</strong> ${empresa.CEP}</p>
        <p><strong>Endereço:</strong> ${empresa.endereco}, ${empresa.cidade} - ${empresa.estado}</p>
    </div>
  `;
});

// Adicionar o container ao body da página
document.body.appendChild(container);
