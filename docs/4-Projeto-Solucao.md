## 4. Projeto da Solução:

Como proposta de solução, nossa aplicação será desenvolvida como um serviço web, utilizando tecnologias para interface, armazenamento de dados e requisições/respostas do usuário para o sistema. Será utilizada principalmente por comerciantes e estoquistas para realizar o controle de produtos no estoque. Com ela o usuário da aplicação poderá cadastrar novos produtos e seus respectivos dados no estoque, lançar saídas de produto ao realizar uma venda, receber notificações de quando o produto estiver próximo do vencimento ou com baixo estoque.

## 4.1. Arquitetura da solução

A arquitetura dos processos do sistema de gestão de estoques foi projetada para pequenas lojas de suvenires, com foco em praticidade e eficiência. Desenvolvido como uma aplicação web utilizando JavaScript, HTML, CSS e banco de dados SQLite, o sistema permite o cadastro de produtos, controle de entradas e saídas, notificações automáticas de itens em nível crítico e gerenciamento de usuários com diferentes níveis de acesso. A hospedagem será feita na plataforma Heroku, devido à sua facilidade de uso e integração com aplicações JavaScript. No entanto, como o Heroku não é ideal para bancos de dados locais como o SQLite, o sistema poderá ser adaptado para utilizar o PostgreSQL, garantindo a persistência e segurança dos dados em produção. Dessa forma, a solução busca substituir os controles manuais, otimizando a organização do estoque e auxiliando na tomada de decisões.
 
 **Exemplo do diagrama de Arquitetura**:
 
 ![Exemplo de Arquitetura](./images/arquitetura-exemplo.png)
 
## 4.1.1 Processos x tarefas

| **Processos**               | **Tarefas**                                                                                               |
|----------------------------|-----------------------------------------------------------------------------------------------------------|
| **Cadastro de Usuário**     | Preencher formulário, Validar dados, Criar conta, Armazenar dados, Exibir mensagens de erro, Redirecionar para a página de login |
| **Login de Usuário**        | Inserir e-mail e senha, Validar dados, Autenticar usuário, Redirecionar para o painel, Exibir mensagens de erro, Solicitar redefinição de senha |
| **Cadastro de Produto**     | Preencher dados do produto, Validar informações, Salvar produto no banco de dados                         |
| **Movimentação de Produtos**| Editar informações do produto, Validar alterações, Atualizar dados no banco de dados                      |
| **Suporte ao Usuário**      | Acessar seção de suporte, Consultar FAQ, Preencher formulário de solicitação, Analisar solicitação, Responder solicitação, Resolver problema, Fechar chamado, Retorno com feedback |

### 4.2. Protótipos de telas

validar o fluxo de navegação e facilitar o entendimento das suas funcionalidades e garantir que esteja claro para cada requisito levantado anteriormente.

### 1 Tela de Cadastro
A tela de cadastro foi desenvolvida para o colaborador inserir suas informações básicas para criar uma conta de acesso á plataforma. 

[imagem].

### 2 Tela de Login
A tela de  login é responsável para autenticar os usuários já cadastrados. Ele conta com o campo de inserir e-mail e senha, além da opção de recuperar senha e um botão de acesso a tela de cadastro caso não tenha um registro.

![tela_login](https://github.com/user-attachments/assets/b6486b4e-787a-4d96-9944-e9559304cbd9)

![tela de login](https://github.com/user-attachments/assets/49c96cf5-3c21-4444-b8f8-3f34b6ac4a12)

### 3 Tela de produtos disponíveis
Essa é uma das principais interfaces do sistema. A tela de gestão de estoque apresenta uma tabela com produtos cadastrados, suas quantidades, categorias e status. O usuário pode pequisar, editar ou excluir registros, além de visualizar rapidamente a situação do estoque.

### 4 Tela de cadastro de empresas
Nessa tela são cadastradas as empresas e suas respectivas informações, tais como CNPJ, Nome, Endereço.

### 5 Tela de registro de movimentações 
Registro de saída ou entrada de produtos.

### 6 Aba geral ou Menu
Menu para transição das telas.

### 7 Suporte ao usuário 
Tela para solicitação de Ajuda, FAC e tutoriais.

### 8 Perfil
Tela que contém os dados do usuário.

São protótipos usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.
 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

![Diagrama Entidade Relacionamento DER](https://github.com/user-attachments/assets/b4b90ffb-1ee9-466b-822f-8d469ae04cc0)

Entidades e Relacionamentos

### 1. Produto

Atributos:

ID_Produto (PK)

Nome

Descrição

Quantidade

Preço

Data_Validade

Categoria




### 2. Categoria

Atributos:

ID_Categoria (PK)

Nome



Relacionamento:

Uma Categoria pode ter vários Produtos (1:N)



### 3. Movimentação_Estoque

Atributos:

ID_Movimentacao (PK)

Tipo (Entrada/Saída)

Quantidade

Data

ID_Produto (FK)



Relacionamento:

Um Produto pode ter várias Movimentações (1:N)



### 4. Usuário (Comerciante)

Atributos:

ID_Usuario (PK)

Nome

Email

Senha

Telefone



Relacionamento:

Um Usuário pode cadastrar vários Produtos (1:N)

Um Usuário pode realizar várias Movimentações (1:N)



### 5. Notificação

Atributos:

ID_Notificacao (PK)

Tipo (Estoque Baixo / Validade Próxima)

Mensagem

Data

ID_Produto (FK)

ID_Usuario (FK)



Relacionamento:

Um Produto pode gerar várias Notificações (1:N)

Um Usuário pode receber várias Notificações (1:N)

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)


### 4.3. Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam efetuar os cadastros de dados e controles associados aos processos identificados, assim como recuperações.
Utilizando a notação do DER (Diagrama Entidade e Relacionamento), elaborem um modelo, na ferramenta visual indicada na disciplina, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar, também, o controle de acesso de usuários (partes interessadas dos processos) de acordo com os papéis definidos nos modelos do processo de negócio.
_Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos._

#### 4.3.1 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

#### 4.3.2 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

![Exemplo de um modelo relacional](images/modeloRelacional.png "Exemplo de Modelo Relacional.")
---


#### 4.3.3 Modelo Físico

Insira aqui o script de criação das tabelas do banco de dados.

Veja um exemplo:

<code>

 -- Criação da tabela Médico
CREATE TABLE Medico (
    MedCodigo INTEGER PRIMARY KEY,
    MedNome VARCHAR(100)
);


-- Criação da tabela Paciente
CREATE TABLE Paciente (
    PacCodigo INTEGER PRIMARY KEY,
    PacNome VARCHAR(100)
);

-- Criação da tabela Consulta
CREATE TABLE Consulta (
    ConCodigo INTEGER PRIMARY KEY,
    MedCodigo INTEGER,
    PacCodigo INTEGER,
    Data DATE,
    FOREIGN KEY (MedCodigo) REFERENCES Medico(MedCodigo),
    FOREIGN KEY (PacCodigo) REFERENCES Paciente(PacCodigo)
);

-- Criação da tabela Medicamento
CREATE TABLE Medicamento (
    MdcCodigo INTEGER PRIMARY KEY,
    MdcNome VARCHAR(100)
);

-- Criação da tabela Prescricao
CREATE TABLE Prescricao (
    ConCodigo INTEGER,
    MdcCodigo INTEGER,
    Posologia VARCHAR(200),
    PRIMARY KEY (ConCodigo, MdcCodigo),
    FOREIGN KEY (ConCodigo) REFERENCES Consulta(ConCodigo),
    FOREIGN KEY (MdcCodigo) REFERENCES Medicamento(MdcCodigo)
);

</code>

Este script deverá ser incluído em um arquivo .sql na pasta src\bd.




### 4.4. Tecnologias

_Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas._

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

| Dimensão            | Tecnologias                    |
|---------------------|--------------------------------|
| **Frontend**         | HTML, CSS       |
| **Frameworks**       | TailWind, BootStrap, Express.js |
| **Backend**          | Node.js, JavaScript, JWT       |
| **Banco de Dados**   | MySQLServer, SQLite          |
| **Hospedagem**       | AWS                   |
| **IDE**              | Visual Studio Code             |
| **Outras ferramentas**| Git, GitHub, Figma, Miro  |
