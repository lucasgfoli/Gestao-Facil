# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Nesta seção do documento, foram exploradas especificações detalhadas do projeto Gestão Fácil para proporcionar uma compreensão aprofundada dos usuários finais. Isso foi realizado por meio de três abordagens interligadas: a criação de perfis fictícios representando os lojistas, a definição clara e objetiva de cenários de uso da plataforma e, por fim, a especificação precisa dos requisitos e funcionalidades essenciais para atender às necessidades da gestão de lojas físicas de pequeno e médio porte.

## Personas

Nome: João (Proprietário)
Idade: 42 anos
Profissão: Empresário, dono de uma loja de eletrônicos
Objetivo Profissional: Melhorar a eficácia da sua loja e expandir seus negócios sem complicações na gestão
Personalidade: Pragmático e focado em resultados, mas sente dificuldade com ferramentas tecnológicas complexas
Interesses e Hobbies: Gotsa de acompanhar tendências de mercado, jogar futebol aos fins de semana e passar o tempo com a familia
Necessidades: Ter uma visão clara do desempenho da loja, controlar o estoque e acompanhar as vendas de foram simples e intuitiva
Motivações: Busca uma solução que facilite a administração do negócio, forneça relatórios práticos e ajude a evitar perdas financeiras

|---------------------------------------------------------------------------------------------------|

Nome: Ana (Funcionária do Estoque)
Idade: 28 anos
Profissão: Assistente de Estoque em uma loja de roupas
Objetivo Profissional: Melhorar sua produtivdade no trabalho e reudizr erros na contagem de produtos
Personalidade: Organizada e responsável, mas se sente sobrecarregada com a conferência manual de estoques
Interesses e Hobbies: Gosta de cozinhar, asssistir a séries e aprender novas técnicas de organização
Necessidades: Ter um sistema que agilize a atualização do estoque, evitando erros de contagem e retrabalho
Motivações: Deseja ferramentas que simplifiquem seu trabalho, reduzam a necessiade de planilhas manuais e tornem o controle mais eficiente.

|---------------------------------------------------------------------------------------------------|

Nome: Lucas (Vendedor)
Idade: 24 anos
Profissão: Vendedor de uma loja de calçados
Objetivo Profissional: Oferecer um atendimento rápido e eficiente aos clientes, garantindo boas vendas
Personalidade: Comunicativo e proativo, mas frustado qaundo não consegue acessar informações do estoque rapidamente
Interesses e Hobbies: Gosta de assistir futebol, sair com os amigos e acompanhar nvoidades sobre tecnologia
Necessidade: Consultar rapidamente a disponibilidade de produtos para evitar perder vendas
Motivações: Busca uma ferramenta que facilite seu atendimento, melhore sua perfomance e ajude a manter os clientes satisfeitos

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
