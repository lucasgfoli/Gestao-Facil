## 4.0 Proposta da Solução

Como proposta de solução, nossa aplicação será desenvolvida como um serviço web, utilizando tecnologias para interface, armazenamento de dados e requisições/respostas do usuário para o sistema. Será utilizada principalmente por comerciantes e estoquistas para realizar o controle de produtos no estoque. Com ela o usuário da aplicação poderá cadastrar novos produtos e seus respectivos dados no estoque, lançar saídas de produto ao realizar uma venda, receber notificações de quando o produto estiver próximo do vencimento ou com baixo estoque.

## 4.1 Arquitetura da solução

A arquitetura dos processos do sistema de gestão de estoques foi projetada para pequenas lojas de suvenires, com foco em praticidade e eficiência. Desenvolvido como uma aplicação web utilizando para FrontEnd o JavaScript, HTML, CSS. Serão utilizados também Javascript, Node JS e JSON para BackEnd. O banco de dados que será utilizado é o SQLite. O sistema permite do projeto Gestão Simples o cadastro de produtos, controle de entradas e saídas, notificações automáticas de itens em nível crítico e gerenciamento de usuários com diferentes níveis de acesso. Dessa forma, a solução busca substituir os controles manuais, otimizando a organização do estoque.
 
## 4.1.1 Processos x tarefas

| **Processos**               | **Tarefas**                                                                                               |
|----------------------------|-----------------------------------------------------------------------------------------------------------|
| **Cadastro de Usuário**     | Preencher formulário, Validar dados, Criar conta, Armazenar dados, Exibir mensagens de erro, Redirecionar para a página de login |
| **Login de Usuário**        | Inserir e-mail e senha, Validar dados, Autenticar usuário, Redirecionar para o painel, Exibir mensagens de erro, Solicitar redefinição de senha |
| **Cadastro de Produto**     | Preencher dados do produto, Validar informações, Salvar produto no banco de dados                         |
| **Movimentação de Produtos**| Editar informações do produto, Validar alterações, Atualizar dados no banco de dados                      |
| **Suporte ao Usuário**      | Acessar seção de suporte, Consultar FAQ, Preencher formulário de solicitação, Analisar solicitação, Responder solicitação, Resolver problema, Fechar chamado, Retorno com feedback |

### 4.2 Protótipos de telas

validar o fluxo de navegação e facilitar o entendimento das suas funcionalidades e garantir que esteja claro para cada requisito levantado anteriormente.

### 1 Tela de Cadastro
A tela de cadastro foi desenvolvida para o colaborador inserir suas informações básicas para criar uma conta de acesso á plataforma. 

![tela_cadastro](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/94d56f47c0b86d71ddb24b1c773495be80f6854e/docs/images/Tela%20Cadastro%20de%20Usu%C3%A1rio.jpg)

### 2 Tela de Login
A tela de  login é responsável para autenticar os usuários já cadastrados. Ele conta com o campo de inserir e-mail e senha, além da opção de recuperar senha e um botão de acesso a tela de cadastro caso não tenha um registro.

![tela_login](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/106a97546241d80826b8a2caedda94da87141582/docs/images/Tela%20de%20Login.jpg)

### 3 Tela de produtos disponíveis
Essa é uma das principais interfaces do sistema. A tela de gestão de estoque apresenta uma tabela com produtos cadastrados, suas quantidades, categorias e status. O usuário pode pequisar, editar ou excluir registros, além de visualizar rapidamente a situação do estoque.

![produtos_cadastrados](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20de%20Produtos%20Cadastrados.jpg).

### 4 Tela de Cadastrar Produto
Essa é a interface onde se é possivel realizar o cadastro de um novo produto, disponibilizando opções para inserir detalhes do mesmo.

![cadastro_produtos](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20de%20Cadastro%20de%20Produto.jpg).

### 5 Tela de cadastro de empresas
Nessa tela são cadastradas as empresas e suas respectivas informações, tais como CNPJ, Nome, Endereço.

![cadastro_empresas](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20Cadastro%20de%20Empresa.jpg).

### 6 Tela de registro de movimentações 
Registro de saída ou entrada de produtos.

![registro_movimentacoes](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20de%20Registro%20de%20Venda.jpg).

### 7 Aba geral ou Menu
Menu para transição das telas.

![aba_geral](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20de%20Menu.jpg).

### 8 Suporte ao usuário 
Tela para solicitação de Ajuda, FAC e tutoriais.
![suporte_ao_usuario](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20de%20Suporte%20ao%20Usu%C3%A1rio.jpg).
![suporte_ao_usuario2](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20de%20Suporte%20ao%20Usu%C3%A1rio%202.jpg).
![faq](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20FAQ.jpg).


### 9 Perfil
Tela que contém os dados do usuário.

![perfil](https://github.com/ICEI-PUC-Minas-PBR-ADS/pbr-ads-2025-1-p2-tiapn-t1-1053100-gestao-facil/blob/801bd9d0dd9bcd7fe3c3f830ab9f3a4195b57759/docs/images/Tela%20de%20Perfil%20do%20Usu%C3%A1rio.jpg).

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

![Diagrama ER de banco de dados (pé de galinha) (2)](https://github.com/user-attachments/assets/9876ee25-d26b-45b9-b9d3-437b8643608d)

![Exemplo de um modelo relacional](images/modeloRelacional.png "Exemplo de Modelo Relacional.")
---

#### 4.3.3 Modelo Físico

<code>

CREATE TABLE IF EXISTS usuario(
	id_usuario INTEGER NOT NULL AUTO_INCREMENT,
    cpnj_usuario INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
   	telefone INTEGER NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_usuario),
	   FOREIGN KEY cpnj_usuario REFERENCES empresa(cpnj_empresa);
);

CREATE TABLE IF NOT EXISTS Produto (
    id_produto INTEGER NOT NULL AUTO_INCREMENT,
    id_fornecedor INTEGER,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco decimal(10,2) NOT NULL,
    quantidade INTEGER NOT NULL,
    data_validade DATE NOT NULL,
    PRIMAR KEY(id_produto),
    FOREIGN KEY (id_fornecedor) REFERENCES fornecedor (id_fornecedor)          
);

CREATE TABLE IF NOT EXISTS cliente(
    cpf CHAR(11) PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL
    
);

CREATE TABLE IF NOT EXISTS fornecedor(
    id_fornecedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_fornecedor VARCHAR(100) NOT NULL 
);


CREATE TABLE IF NOT EXISTS estoque(
    num_setor INTEGER NOT NULL PRIMARY KEY,
    coluna INTEGER NOT NULL,
    corredor INTEGER NOT NULL,
    prateleira INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS chamado (
    id_chamado INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_usuario INTEGER,
    data_chamado DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id)
);


CREATE TABLE IF NOT EXISTS suporte (
    id_suporte INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_chamado INTEGER NOT NULL,
    nome VARCHAR(100) NOT NULL,
    nivel_suporte VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_chamado) REFERENCES chamado(id_chamado)
);


CREATE TABLE IF NOT EXISTS empresa(
    id_empresa INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cpnj_empresa INTEGER NOT NULL,
    razao_social VARCHAR(30) NOT NULL, 
    email_empresa VARCHAR(50) NOT NULL,
    telefone_empresa VARCHAR(10),
    endereco VARCHAR(100),
    FOREING KEY (cnpj_empresa) REFERENCES usuario(id_usuario);
);

</code>

### 4.4. Tecnologias

| Dimensão            | Tecnologias                    |
|---------------------|--------------------------------|
| **Frontend**         | HTML, CSS       |
| **Frameworks**       | TailWind, BootStrap, Express.js |
| **Backend**          | Node.js, JavaScript, JWT       |
| **Banco de Dados**   | MySQLServer, SQLite          |
| **Hospedagem**       | AWS                   |
| **IDE**              | Visual Studio Code             |
| **Outras ferramentas**| Git, GitHub, Figma, Miro  |
