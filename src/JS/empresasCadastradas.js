const urlAPI = 'https://gestao-facil-1.onrender.com/empresas'

async function listarEmpresas() {
  try {
    const response = await fetch(urlAPI)
    if (!response.ok) throw new Error('Erro ao buscar empresas')

    const empresas = await response.json()
    const container = document.createElement("div")
    container.classList.add('empresas-cadastradas')

    empresas.forEach(empresa => {
      container.innerHTML += `
        <div class="empresa">
            <h3>${empresa.nome}</h3>
            <p><strong>Razão Social: </strong>${empresa.nome}</p>
            <p><strong>Site:</strong> <a href="${empresa.site || '#'}" target="_blank">${empresa.site || 'Não informado'}</a></p>
            <p><strong>Telefone:</strong> ${empresa.telefone || 'Não informado'}</p>
            <p><strong>Email:</strong> ${empresa.email || 'Não informado'}</p>
            <p><strong>CEP:</strong> ${empresa.cep || 'Não informado'}</p>
            <p><strong>Endereço:</strong> ${empresa.endereco || 'Não informado'}, ${empresa.cidade || ''} - ${empresa.estado || ''}</p>
        </div>
      `;
    });

    document.body.appendChild(container)
  } catch (erro) {
      console.error(erro)
  }
}

document.addEventListener('DOMContentLoaded', listarEmpresas)
