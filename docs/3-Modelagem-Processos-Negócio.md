# Modelagem dos Processos de Negócio

## Cadastro de Usuário

O usuário acessa a plataforma pela primeira vez e começa o processo de cadastro.

Primeiramente, o usuário preenche um formulário na aplicação web com informações como nome, e-mail, CNPJ, número de telefone, data de nascimento, senha e confirmação de senha. Após o preenchimento, o sistema valida os dados inseridos. Ele verifica se os dados estão preenchidos corretamente e se não há inconsistências.

Se os dados estiverem corretos, o sistema cria uma conta de usuário e armazena os dados no banco de dados. Caso contrário, se os dados estiverem incorretos, o sistema exibe uma mensagem de erro explicando o que precisa ser corrigido, como "E-mail já cadastrado" ou "Senhas não coincidem". Após a validação e sucesso no cadastro, o usuário é redirecionado para a tela de login.

## Login de Usuário

O usuário acessa a tela de login da plataforma e insere seu e-mail e senha. O sistema, então, valida os dados inseridos, verificando se o e-mail existe no banco de dados e se a senha corresponde à senha cadastrada para aquele e-mail.

Se os dados estiverem corretos, o sistema autentica o usuário e o redireciona para o painel administrativo do comerciante. Caso os dados estejam incorretos, o sistema exibe uma mensagem de erro informando "E-mail ou senha incorretos". O usuário pode tentar novamente ou solicitar a recuperação de senha.

Se o usuário clicar na opção "Esqueci minha senha", o sistema envia um e-mail com um link para redefinir a senha. O usuário segue o link, insere uma nova senha, e a conta é atualizada. Após o processo de login ou recuperação de senha, o usuário tem acesso à plataforma com a conta devidamente autenticada.

## Cadastro de Produto no Estoque

O comerciante acessa o painel administrativo e clica na opção de cadastrar um novo produto. Ele preenche informações sobre o produto, como nome, quantidade, preço, entre outros dados relevantes. O sistema então valida se todas as informações necessárias foram preenchidas corretamente. Caso alguma informação esteja faltando, o sistema não valida o cadastro.

Se os dados estiverem corretos, o produto é salvo no banco de dados. Após a validação e o salvamento, o sistema envia uma mensagem confirmando o registro do produto.

## Movimentação de Produtos

O comerciante percebe que há inconsistências nos dados de um produto e decide editar as informações. Para isso, ele acessa o painel administrativo e clica na opção de editar as informações do produto. O sistema então verifica se os dados estão corretos. Se as informações estiverem corretas, o produto é salvo com as alterações. Caso contrário, se os dados apresentarem informações incorretas, o sistema não altera o produto e exibe uma mensagem de erro. Após a validação e o processo, a descrição do produto é alterada no banco de dados.

## Suporte ao Usuário

Caso o usuário encontre um problema ou tenha uma dúvida sobre o sistema, ele acessa a seção de suporte na plataforma. O sistema então verifica se o problema pode ser resolvido por meio da FAQ ou tutoriais. Se a resposta estiver disponível, o usuário consulta a FAQ e resolve o problema. Nesse caso, o processo é encerrado.

Se o problema não for resolvido através da FAQ ou tutoriais, o usuário preenche um formulário detalhando o problema e o envia. O suporte recebe a solicitação e abre um chamado para investigar o caso. Em seguida, o suporte analisa a solicitação e responde com uma solução.

Se o problema for resolvido, o usuário confirma a solução e o chamado é encerrado. Caso contrário, o usuário retorna com feedback sobre o atendimento e inicia uma nova solicitação. Se necessário, o suporte avançado resolve o problema e retorna a solução ao usuário, e o chamado é encerrado com a aplicação da solução
### 3.1. Modelagem da situação atual (Modelagem AS IS)

Atualmente, a gestão de estoque é realizada de maneira totalmente manual, sem o armazenamento adequado de dados sobre os produtos. O conferimento dos itens é realizado de forma superficial devido à alta demanda, o que dificulta o controle e a precisão. Além disso, os produtos são repostos apenas quando um estoquista percebe a falta e faz a solicitação de reabastecimento, sem um sistema de monitoramento contínuo.

Outro grande desafio é a falta de informações sobre a validade dos produtos, o que é controlado apenas diretamente nas embalagens dos itens, e não de forma centralizada e acessível. Como consequência, a empresa enfrenta perdas de produtos, falta de itens essenciais no estoque e uma organização precária.

#### Proposta de Solução:

É de extrema importância a implementação de um software de gestão de estoque que armazena e organiza dados detalhados sobre cada produto. Esse sistema permitirá também a notificação automática sobre a validade dos itens e o controle de sua quantidade em tempo real, oferecendo uma visão clara e ampla do estoque. Dessa forma, evita-se a perda ou excesso de um produto no estoque, promovendo que a empresa lide com um estoque mais equilibrado e organizado. 

Com a automatização desse controle, o novo sistema contribuirá significativamente para a gestão eficiente do estoque, reduzindo perdas, melhorando a organização e otimizando o tempo da equipe. A visibilidade ampliada proporcionará uma gestão mais rápida e eficiente, facilitando a tomada de decisões estratégicas e a manutenção de níveis adequados dos produtos.

### 3.2 Modelagem dos processos

### Processo 1: <strong>PROCESSO DE CADASTRO E LOGIN</strong>
O processo de cadastro e login de usuário é o primeiro contato do usuário com o sistema. Isso permite que somente usuários da empresa previamente cadastrados possam ter acesso ás permissões de acesso do sistema. 
A vantagem de possui um sistema de acesso é garantir que apenas usuários desejáveis tenham permissão de vizualiar e manipular as ferramentas.

![sistema de login e cadastro](https://github.com/user-attachments/assets/462b2237-ebc5-4492-bea2-c9a40c76afc8)

### Processo 2: <strong>PROCESSO DE CADASTRAR PRODUTO</strong>
O processo de cadastro de produto é a funcionalidade responsável por registrar todas as informações relevantes de um item que será controlado no estoque. Esse processo é essencial para garantir a organização, rastreabilidade e gerenciamento dos produtos dentro do sistema.

![registro de produto](https://github.com/user-attachments/assets/01a27825-dce9-4a72-9ce5-8ccb544c4907)

### Processo 3: <strong>PROCESSO DE GESTÃO DE ESTOQUE</strong>
O processo de gestão de estoque envolve o controle das entradas e saídas de produtos em uma loja. Ele começa com o recebimento de mercadorias enviadas por fornecedores, momento em que os produtos são registrados como entrada no estoque.

Além disso, quando um produto é vendido ou retirado para uso, é realizado o registro de saída, garantindo que o estoque reflita corretamente a quantidade disponível.

![Controle de gestão de estoque](https://github.com/user-attachments/assets/a1c0cacb-bff7-4302-864d-f943e91f27e8)

### Processo 4: <strong>PROCESSO DE SUPORTE AO USUÁRIO</strong>
O processo de suporte ao usuário envolve o esclarecimento de dúvidas, a resolução de problemas e o fornecimento de feedback sobre o sistema, garantindo uma experiência eficiente e satisfatória.

![Imagem do WhatsApp de 2025-04-04 à(s) 19 03 42_e2cfa813](https://github.com/user-attachments/assets/3146a398-2f29-4738-9748-ca75fefd99ec)

[PROCESSO 1 - Processo de Autenticação](./processos/processo-1-nome-do-processo.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Processo de Cadastro de Produto](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")

[PROCESSO 3 - Processo de Gestão de Estoque](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")

[PROCESSO 4 - Processo de suporte ao Usuário](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")
