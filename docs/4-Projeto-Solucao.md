## 4. Projeto da Solução:

Como proposta de solução, nossa aplicação será desenvolvida como um serviço web, utilizando tecnologias para interface, armazenamento de dados e requisições/respostas do usuário para o sistema. Será utilizada principalmente por comerciantes e estoquistas para realizar o controle de produtos no estoque. Com ela o usuário da aplicação poderá cadastrar novos produtos e seus respectivos dados no estoque, lançar saídas de produto ao realizar uma venda, receber notificações de quando o produto estiver próximo do vencimento ou com baixo estoque.

## 4.1. Arquitetura da solução

A arquitetura dos processos do sistema de gestão de estoques foi projetada para pequenas lojas de suvenires, com foco em praticidade e eficiência. Desenvolvido como uma aplicação web utilizando para FrontEnd o JavaScript, HTML, CSS. Serão utilizados também Javascript, Node JS e JSON para BackEnd. O banco de dados que será utilizado é o SQLite. O sistema permite do projeto Gestão Simples o cadastro de produtos, controle de entradas e saídas, notificações automáticas de itens em nível crítico e gerenciamento de usuários com diferentes níveis de acesso. Dessa forma, a solução busca substituir os controles manuais, otimizando a organização do estoque.
 
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

![tela_cadastro](https://github.com/user-attachments/assets/ac32866f-d050-40fc-8ab1-cf61b6b456fe)

### 2 Tela de Login
A tela de  login é responsável para autenticar os usuários já cadastrados. Ele conta com o campo de inserir e-mail e senha, além da opção de recuperar senha e um botão de acesso a tela de cadastro caso não tenha um registro.

![tela_login](https://github.com/user-attachments/assets/b6486b4e-787a-4d96-9944-e9559304cbd9)

### 3 Tela de produtos disponíveis
Essa é uma das principais interfaces do sistema. A tela de gestão de estoque apresenta uma tabela com produtos cadastrados, suas quantidades, categorias e status. O usuário pode pequisar, editar ou excluir registros, além de visualizar rapidamente a situação do estoque.

![produtos_cadastrados](https://github.com/user-attachments/assets/c268a3f6-050f-4d26-af85-14acd440597e)

### 4 Tela de Cadastrar Produto
Essa é a interface onde se é possivel realizar o cadastro de um novo produto, disponibilizando opções para inserir detalhes do mesmo.

![cadastro_produtos](https://github.com/user-attachments/assets/32f3c4af-18c2-42e7-8c86-6e3543f58c6a)

### 5 Tela de cadastro de empresas
Nessa tela são cadastradas as empresas e suas respectivas informações, tais como CNPJ, Nome, Endereço.

![cadastro_empresas](https://github.com/user-attachments/assets/9a1565ea-3885-40aa-b400-85dad7636611)

### 6 Tela de registro de movimentações 
Registro de saída ou entrada de produtos.

![registro_movimentacoes](https://github.com/user-attachments/assets/fd3f5af2-5806-4dd8-b06a-babca9599b5b)

### 7 Aba geral ou Menu
Menu para transição das telas.

![aba_geral](https://github.com/user-attachments/assets/3e9145b5-319f-43d0-b3f9-8c9b35dc8954)

### 8 Suporte ao usuário 
Tela para solicitação de Ajuda, FAC e tutoriais.

### 9 Perfil
Tela que contém os dados do usuário.

![perfil](https://github.com/user-attachments/assets/2d8c6d8e-b1be-41f2-8c7a-9cd79edecf1b)

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

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)


### 4.3 Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam efetuar os cadastros de dados e controles associados aos processos identificados, assim como recuperações.
Utilizando a notação do DER (Diagrama Entidade e Relacionamento), elaborem um modelo, na ferramenta visual indicada na disciplina, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar, também, o controle de acesso de usuários (partes interessadas dos processos) de acordo com os papéis definidos nos modelos do processo de negócio.
_Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos._

#### 4.3.1 Modelo ER

![Diagrama Entidade Relacionamento DER drawio](https://github.com/user-attachments/assets/3bdaa877-2895-4359-a4f0-b7cf09f8959d)

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)


#### 4.3.2 Esquema Relacional

![Diagrama ER de banco de dados (pé de galinha) (3)](https://github.com/user-attachments/assets/3a87ea2f-d393-4419-87aa-4ac4b2a3a0c2)

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

![Exemplo de um modelo relacional](images/modeloRelacional.png "Exemplo de Modelo Relacional.")
---

#### 4.3.3 Modelo Físico

<code>
 
-- Criação da tabela Cliente
CREATE TABLE Cliente (
    CPF CHAR(11) PRIMARY KEY,
    nome VARCHAR(100),
    data_nascimento DATE
);

-- Criação da tabela Fornecedor
CREATE TABLE Fornecedor (
    id_fornecedor INTEGER PRIMARY KEY,
    nome_fornecedor VARCHAR(100)
);

-- Criação da tabela Produto
CREATE TABLE Produto (
    id_produto INTEGER PRIMARY KEY,
    id_fornecedor INTEGER,
    nome VARCHAR(100),
    categoria VARCHAR(50),
    preco DECIMAL(10, 2),
    quantidade INTEGER,
    data_validade DATE,
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id_fornecedor)
);

-- Criação da tabela Estoque
CREATE TABLE Estoque (
    num_setor INTEGER PRIMARY KEY,
    coluna INTEGER,
    corredor INTEGER,
    prateleira INTEGER
);

-- Criação da tabela Usuario
CREATE TABLE Usuario (
    id_usuario INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    data_nascimento DATE,
    telefone VARCHAR(20),
    email VARCHAR(100),
    senha VARCHAR(100),
    cnpj CHAR(14)
);

-- Criação da tabela Chamado
CREATE TABLE Chamado (
    id_chamado INTEGER PRIMARY KEY,
    id_usuario INTEGER,
    data_chamado DATE,
    categoria VARCHAR(50),
    nome VARCHAR(100),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

-- Criação da tabela Suporte
CREATE TABLE Suporte (
    id_suporte INTEGER PRIMARY KEY,
    id_chamado INTEGER,
    nome VARCHAR(100),
    nivel_suporte VARCHAR(50),
    FOREIGN KEY (id_chamado) REFERENCES Chamado(id_chamado)
);

</code>

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
