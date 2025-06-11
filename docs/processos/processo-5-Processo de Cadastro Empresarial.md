### 3.2.5 Processo 5 - Processo de Cadastro Empresarial

O processo de cadastro empresarial envolve o registro das informações essenciais da emporesa, permitindo que o sistema organize e armazene os dados de forma segura e eficiente para uma gestão facilitada.

![cadastro empresarial](https://github.com/user-attachments/assets/9377227c-210d-4a6b-a6e2-9003fa347d7d)

#### Detalhamento das Atividades


**Atividade 1 - Acessar seção de cadastro empresarial**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
|----------------------|------------------|----------------------------|-------------------|
| botão "Cadastrar Empresa" | Botão | obrigatório | default |

| **Comandos** | **Destino** | **Tipo** |
| --- | --- | --- |
| CADASTRAR | Inicio da atividade 2 | default |

**Atividade 2 - Preencher Formulário**
| **Campo**            | **Tipo**               | **Restrições**               | **Valor default** |
| -------------------- | ---------------------- | ---------------------------- | ----------------- |
| Razão Social         | Caixa de Texto → Nome  | obrigatório                  | default           |
| e-mail               | Caixa de Texto → Email | formato de e-mail válido     | default           |
| CNPJ                 | Número de CNPJ         | 14 dígitos numéricos válidos | default           |
| telefone             | Número de Telefone     | apenas números, com DDD      | default           |

| **Comandos** | **Destino** | **Tipo** |
| --- | --- | --- |
| CADASTRAR COMO USUÁRIO | Cadastro do Usuário | default |
| FAÇA LOGIN | Seção de login | default |

**Atividade 3 - Submeter dados**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
|----------------------------|---------------------------|--------------------------------------------------------|---------------------------|
| todos os campos do formulário | Dados do formulário preenchido | devem cumprir todas as restrições de validação individual | preenchidos corretamente  |

