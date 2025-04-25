## 4. Projeto da Solução:

Como proposta de solução, nossa aplicação será desenvolvida como um serviço web, utilizando tecnologias para interface, armazenamento de dados e requisições/respostas do usuário para o sistema. Será utilizada principalmente por comerciantes e estoquistas para realizar o controle de produtos no estoque. Com ela o usuário da aplicação poderá cadastrar novos produtos e seus respectivos dados no estoque, lançar saídas de produto ao realizar uma venda, receber notificações de quando o produto estiver próximo do vencimento ou com baixo estoque.

## 4.1. Arquitetura da solução


......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

 Inclua um diagrama da solução e descreva os módulos e as tecnologias
 que fazem parte da solução. Discorra sobre o diagrama.
 
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

O protótipo de telas é uma representação visual inicial das interfaces de nosso sistema, com o objetivo de simula a navegação e a interação do usuário com a plataforma antes de sua implementação inicial. No projeto Gestão Fácil, os protótipos foram desenvolvidos para validar o fluxo de navegação e facilitar o entendimento das suas funcionalidades e garantir que esteja claro para cada requisito levantado anteriormente.
### 1 Tela Principal (Home)
A tela principal é o ponto de entrada do sistema, oferecendo a proposta inicial do nosso sistema. Nela, o usuário encontra uma breve descrição da aplicação e de suas funcionalidades, além dos botões redirecionais de login e cadastro. 
Essa interface é essencial para causar uma boa primeira impressão e orientar o usuário sobre o propósito da plataforma.

[imagem].

### 2 Tela de Cadastro
A tela de cadastro foi desenvolvida para o colaborador inserir suas informações básicas para criar uma conta de acesso á plataforma. 

[imagem].

### 3 Tela de Login
A tela de  login é responsável para autenticar os usuários já cadastrados. Ele conta com o campo de inserir e-mail e senha, além da opção de recuperar senha e um botão de acesso a tela de cadastro caso não tenha um registro.

![tela de login](https://github.com/user-attachments/assets/49c96cf5-3c21-4444-b8f8-3f34b6ac4a12)

### 4 Tela de Gestão de Estoque
Essa é uma das principais interfaces do sistema. A tela de gestão de estoque apresenta uma tabela com produtos cadastrados, suas quantidades, categorias e status. O usuário pode pequisar, editar ou excluir registros, além de visualizar rapidamente a situação do estoque.

[imagem].

### 5 Tela de Entrada de Produtos
A tela de entrada de proutos permite que o usuário registre novas mercadorias que estão chegando ao estoque, permitindo inserir dados como nome do produto, quntidade, data de entrada, fornecedor responsável, num do setor e informações onde for alocada. Ela é essencial para manter o controle atualizado do inventário e evitar perdas por falta de registro ou atrasos.

[imagem].

### 6  Tela de Saida de Produtos
A tela de saida de produtos é utilizada para registrar todas as retidads do estoque, seja por vendas, trocas, perdas ou por quaisquer outros mótivos. O usuário podde informar o produto, quantidade, motivo de saída e data. Essa tela mantém um histórico de movimentações e garantir o controle de estoque reflita a realidade da loja em tempo real.

[imagem].

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).
Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a>.
A partir das atividades de usuário identificadas na seção anterior, elabore o protótipo de tela de cada uma delas.
![Exemplo de Wireframe](images/wireframe-example.png)

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
