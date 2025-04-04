# Modelagem dos Processos de Negócio

## 1. Processos Primários

### Cadastro de Usuário

**Início:**  
O usuário acessa a plataforma pela primeira vez.

**Etapa 1: Preenchimento de Dados na aplicação web**  
O usuário preenche um formulário com as seguintes informações: Nome, Email, CNPJ, Número de telefone, Data de nascimento, Senha e confirmação de senha.

**Etapa 2: Validação de Dados**  
O sistema verifica se os dados estão preenchidos corretamente e se há inconsistências.

**Decisão:**  
- **Se os dados estiverem corretos:** O sistema cria uma conta de usuário e armazena os dados no banco de dados.  
- **Se os dados estiverem incorretos:** O sistema exibe uma mensagem de erro explicando o que precisa ser corrigido (por exemplo, "E-mail já cadastrado" ou "Senhas não coincidem").

**Fim:**  
O usuário é redirecionado para a tela de login.

---

### Login de Usuário

**Início:**  
O usuário acessa a tela de login da plataforma.

**Etapa 1: Preenchimento de Dados de Login**  
O usuário insere seu e-mail e senha.

**Etapa 2: Validação de Dados**  
O sistema verifica:
- Se o e-mail existe no banco de dados.
- Se a senha informada corresponde à senha cadastrada para aquele e-mail.

**Decisão:**  
- **Se os dados estiverem corretos:** O sistema autentica o usuário e o redireciona para o painel administrativo do comerciante.  
- **Se os dados estiverem incorretos:** O sistema exibe uma mensagem de erro, como "E-mail ou senha incorretos". O usuário pode tentar novamente ou solicitar uma recuperação de senha.

**Etapa 3: Recuperação de Senha (se necessário)**  
- Se o usuário clicar em "Esqueci minha senha": O sistema envia um e-mail com um link para redefinir a senha. O usuário segue o link, insere uma nova senha e a conta é atualizada.

**Fim:**  
O usuário é cadastrado e tem acesso à plataforma, com a conta devidamente autenticada.

---

### Registro de Movimentações

#### Cadastro de Produto no Estoque

**Início:**  
O comerciante acessa o painel administrativo.

**Etapa 1:**  
O comerciante clica em cadastrar novo produto e preenche informações do produto (nome, quantidade, preço, etc.).

**Etapa 2:**  
O sistema valida os dados.

**Decisão:**  
- **Se os dados estiverem corretos:** O produto é salvo no banco de dados.

**Fim:**  
O produto é registrado no banco de dados.

---

#### Edição de Produtos

**Início:**  
O comerciante percebe inconsistência nos dados de um produto.

**Etapa 1:**  
Acessa o painel administrativo.

**Etapa 2:**  
Clica em editar informações do produto.

**Etapa 3:**  
O sistema verifica se os dados estão corretos.

**Decisão:**  
- **Se os dados estiverem corretos:** O produto é salvo.
- **Se os dados apresentarem informações incorretas:** O produto não é alterado e o sistema exibe uma mensagem de erro.

**Fim:**  
A descrição do produto é alterada no banco de dados.

---
Etapa 1:
 ### Início:
 - Usuário encontra um problema ou tem dúvida sobre o sistema.
 
 ● Acessa a seção de suporte no sistema. 
 ### Etapa 1:
 - Acessa a seção de suporte no sistema.
 
 ● Decisão: O problema pode ser resolvido por meio da FAQ ou tutoriais? 
 ### Decisão: O problema pode ser resolvido por meio da FAQ ou tutoriais?
 - Sim → Usuário consulta a FAQ e resolve o problema. **Fim.**
 - Não → Continua para a próxima etapa.
 
 ● Sim → Usuário consulta a FAQ e resolve o problema. Fim. 
 ### Etapa 2:
 - Usuário preenche um formulário descrevendo o problema e o envia.
 
 ● Não → Continua para a próxima etapa. 
 ### Etapa 3:
 - Suporte recebe solicitação e abre um chamado.
 
 Etapa 2: 
 ### Etapa 4:
 - Suporte analisa a solicitação e responde com uma solução.
 
 ● Usuário preenche um formulário descrevendo o problema e o envia. 
 ### Decisão: O problema foi resolvido?
 - Sim → Usuário confirma e o chamado é encerrado. **Fim.**
 - Não → Usuário retorna com feedback do atendimento e inicia uma nova solicitação.
 
 Etapa 3: 
 ### Etapa 5:
 - Suporte avançado resolve o problema e retorna a solução ao usuário.
 
 ● Suporte recebe solicitação e abre um chamado. 
 ## Fim:
 - Chamado encerrado com solução aplicada.
 
 Etapa 4:
 ---
 
 ● Suporte analisa a solicitação e responde com uma solução. 
 # Processos Gerenciais
 
 Decisão:
 ## Relatório de Vendas de Produtos
 
 ● O problema foi resolvido? 
 ### Início:
 - O sistema coleta os dados das vendas realizadas.
 
 ● Sim → Usuário confirma e o chamado é encerrado. Fim. 
 ### Etapa 1:
 - O sistema organiza as informações sobre quantidade de produtos vendidos, valores arrecadados e desempenho de cada item.
 
 ● Não → Usuário retorna com feedback do atendimento e inicia uma nova solicitação.
 Etapa 5:
 ### Etapa 2:
 - O comerciante acessa o painel de relatórios e visualiza gráficos e métricas sobre as vendas.
 
 ● Suporte avançado resolve o problema e retorna a solução ao 
 usuário. 
 
 Fim: 
 ---

### 3.1. Modelagem da situação atual (Modelagem AS IS)

Atualmente, a gestão de estoque é realizada de maneira totalmente manual, sem o armazenamento adequado de dados sobre os produtos. O conferimento dos itens é realizado de forma superficial devido à alta demanda, o que dificulta o controle e a precisão. Além disso, os produtos são repostos apenas quando um estoquista percebe a falta e faz a solicitação de reabastecimento, sem um sistema de monitoramento contínuo.

Outro grande desafio é a falta de informações sobre a validade dos produtos, o que é controlado apenas diretamente nas embalagens dos itens, e não de forma centralizada e acessível. Como consequência, a empresa enfrenta perdas de produtos, falta de itens essenciais no estoque e uma organização precária.

#### Proposta de Solução:

É de extrema importância a implementação de um software de gestão de estoque que armazena e organiza dados detalhados sobre cada produto. Esse sistema permitirá também a notificação automática sobre a validade dos itens e o controle de sua quantidade em tempo real, oferecendo uma visão clara e ampla do estoque. Dessa forma, evita-se a perda ou excesso de um produto no estoque, promovendo que a empresa lide com um estoque mais equilibrado e organizado. 

Com a automatização desse controle, o novo sistema contribuirá significativamente para a gestão eficiente do estoque, reduzindo perdas, melhorando a organização e otimizando o tempo da equipe. A visibilidade ampliada proporcionará uma gestão mais rápida e eficiente, facilitando a tomada de decisões estratégicas e a manutenção de níveis adequados dos produtos.

### 3.2. Descrição geral da proposta (Modelagem TO BE)

Com base na análise da situação atual (AS IS), a proposta de solução visa otimizar o gerenciamento de estoque por meio da digitalização e automação dos processos. A implementação do sistema "Gestão Fácil" permitirá que pequenos e médios comerciantes de cidades históricas, como a Serra da Canastra, administrem seus estoques de forma mais simples e eficiente, garantindo maior controle sobre os produtos e evitando perdas.

<strong> Proposta de Solução </strong><br>

O "Gestão Fácil" será um software intuitivo que oferecerá funcionalidades essenciais para otimizar a gestão de estoque, incluindo:

<strong>1 - </strong> Registro e Monitoramento de Produtos:

• Cadastro básico de cada item, incluindo descrição, quantidade e preço.

• Consulta rápida via aplicativo ou plataforma web.

<strong>2 - </strong> Controle Simplificado de Estoque:

• Notificação automática sobre produtos próximos do vencimento.

• Alertas de estoque baixo para reposição manual.

<strong>3 - </strong> Interface Simples e Acessível:

• Sistema responsivo compatível com dispositivos móveis e desktops.

• Funcionalidades simplificadas para facilitar o uso por comerciantes sem experiência em tecnologia.

<strong> Limites da Solução </strong><br>

Apesar das melhorias, há algumas limitações a serem consideradas:

• Dependência de Conectividade: O sistema pode necessitar de conexão com a internet para atualização em tempo real.

• Necessidade de Capacitação: Alguns usuários podem precisar de um breve treinamento para utilizar as funcionalidades básicas do sistema.

<strong> Alinhamento com Objetivos do Negócio </strong><br>

A solução está alinhada com a necessidade de modernização dos comércios locais, oferecendo maior controle operacional e facilitando o monitoramento dos estoques. Pequenos lojistas de lembranças e memorabilia terão uma ferramenta que ajuda a evitar rupturas de estoque e melhorar a organização dos produtos.

<strong> Oportunidades de Melhoria </strong><br>

<strong> No futuro, o sistema poderá ser aprimorado com funcionalidades adicionais, como: </strong><br>

• Possibilidade de exportar dados do estoque para uma planilha.

• Implementação de um módulo offline para permitir acesso sem internet.

• Sistema de alerta configurável para cada produto.

### 3.3. Modelagem dos processos



### Processo 1: Gerenciar Estoque

O processo de gestão de estoque abordado envolve o controle de entrada e saída de mercadorias, além do monitoramento em tempo real pelo sistema.

![processo de estoque](https://github.com/user-attachments/assets/3fb3e3e0-3aeb-45bf-959f-4921d1b014c0)

### 3.3.2 <strong>PROCESSO DE VENDA E ATUALIZAÇÃO DE ESTOQUE</strong>

O processo de venda inclui a atualização do estoque em tempo real, garantindo o armazenamento preciso dos dados de cada produto.

![processo de venda e atualização](https://github.com/user-attachments/assets/667d619d-233a-4188-9e4f-88b06770d78c)

### 3.3.3 <strong>PROCESSO DE REGISTRO DE MOVIMENTAÇÕES</strong>

O processo de gestão de estoque abrange o controle de entrada e saída de produtos, proporcionando ao gestor uma visão ampla e maior organização.

![Processo de registro de movimentações](https://github.com/user-attachments/assets/38394530-3dd7-49c6-bc09-12bdb5f02ac6)

### 3.3.4 <strong>PROCESSO DE SUPORTE AO USUÁRIO</strong>

O processo de suporte ao usuário envolve o esclarecimento de dúvidas, a resolução de problemas e o fornecimento de feedback sobre o sistema, garantindo uma experiência eficiente e satisfatória.

![Imagem do WhatsApp de 2025-03-28 à(s) 18 53 30_4cce93a2](https://github.com/user-attachments/assets/b691ea05-3f5d-429b-b746-27e2bc1030d8)

[PROCESSO 1 - Nome do Processo](./processos/processo-1-nome-do-processo.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Nome do Processo](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")
