### 3.2.1 Processo 1 – Processo de Autenticação

O processo de cadastro e login de usuário é o primeiro contato do usuário com o sistema. Isso permite que somente usuários da empresa previamente cadastrados possam ter acesso ás permissões de acesso do sistema. A vantagem de possui um sistema de acesso é garantir que apenas usuários desejáveis tenham permissão de vizualiar e manipular as ferramentas.

![430541115-462b2237-ebc5-4492-bea2-c9a40c76afc8](https://github.com/user-attachments/assets/beb9666f-8a55-4359-ad66-bb10f08ce32b)

#### Detalhamento das atividades

**Atividade 1 - Acessar seção de cadastro**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
|----------------------|------------------|----------------------------|-------------------|
| botão "Cadastre-se" | Botão | obrigatório | default |

| **Comandos** | **Destino** | **Tipo** |
|--------------|--------------------|-----------|
| ACESSAR | Seção de cadastro | default |

**Atividade 2 - Preencher formulário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| nome | Caixa de Texto -> Nome | obrigatório | default |
| Razão Social | Caixa de Texto -> Nome | obrigatório | default |
| e-mail | Caixa de Texto -> Email | formato de e-mail válido | default |
| CNPJ | Número de CNPJ | 14 dígitos numéricos válidos | default |
| CPF | Número de CNPJ | 11 dígitos numéricos válidos | default |
| telefone | Número de Telefone | apenas números, com DDD | default |
| data de nascimento | Data (dd-mm-aaaa) | maior de 18 anos | default |
| senha | Caixa de Texto -> Senha | mínimo de 8 caracteres | default |
| confirmação de senha | Caixa de Texto -> Confirmação de Senha | igual à senha | default |

| **Comandos** | **Destino** | **Tipo** |
| --- | --- | --- |
| CADASTRAR | Fim do Processo 1 | default |
| ENTRAR | Seção de login | default |

**Atividade 3 - Submeter dados**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
|----------------------------|---------------------------|--------------------------------------------------------|---------------------------|
| todos os campos do formulário | Dados do formulário preenchido | devem cumprir todas as restrições de validação individual | preenchidos corretamente  |

| **Comandos** | **Destino** | **Tipo** |
|----------------|-----------------------------------|-----------|
| SUBMETER | Validação de dados e cadastro do usuário | default |
| EXIBIR MENSAGEM | Sucesso ou erro na submissão | default |


**Atividade 4 - Acessar Seção de Login**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
|----------------------|------------------|----------------------------|-------------------|
| botão "Entrar" | Botão | visível na tela inicial | default |

| **Comandos** | **Destino** | **Tipo** |
|--------------|-----------------|-----------|
| ACESSAR | Seção de login | default |

**Atividade 5 - Digitar credenciais**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Inserir Email | Caixa de Texto | formato de e-mail | default |
| Inserir senha | Caixa de Texto | mínimo de 8 caracteres | default |

| **Comandos** | **Destino** | **Tipo** |
| --- | --- | --- |
| ENTRAR | Fim do Processo 1 | default |
| CADASTRAR | Seção de cadastro | default |


