### 3.2.1 Processo 1 – Processo de Autenticação

O processo de cadastro e login de usuário é o primeiro contato do usuário com o sistema. Isso permite que somente usuários da empresa previamente cadastrados possam ter acesso ás permissões de acesso do sistema. A vantagem de possui um sistema de acesso é garantir que apenas usuários desejáveis tenham permissão de vizualiar e manipular as ferramentas.

![430541115-462b2237-ebc5-4492-bea2-c9a40c76afc8](https://github.com/user-attachments/assets/beb9666f-8a55-4359-ad66-bb10f08ce32b)

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 1. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Caixa de texto -> Nome** - campo texto de uma linha_

_* **Caixa de texto -> Email** - campo texto de uma linha_

_* **Número de CNPJ** - campo numérico_

_* **Número de Telefone** - campo numérico_

_* **Data de nascimento** - campo do tipo data (dd-mm-aaaa)_

_* **Caixa de texto -> Senha** - campo texto de uma linha_

_* **Caixa de texto -> Confirmação de Senha** - campo texto de uma linha_

**Seção de cadastro**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| nome | Caixa de Texto -> Nome | obrigatório | |
| e-mail | Caixa de Texto -> Email | formato de e-mail válido | |
| CNPJ | Número de CNPJ | 14 dígitos numéricos válidos | |
| telefone | Número de Telefone | apenas números, com DDD | |
| data de nascimento | Data (dd-mm-aaaa) | maior de 18 anos | |
| senha | Caixa de Texto -> Senha | mínimo de 8 caracteres | |
| confirmação de senha | Caixa de Texto -> Confirmação de Senha | igual à senha | |

| **Comandos**   | **Destino**         | **Tipo**   |
| ---            | ---                 | ---        |
| CADASTRAR      | Fim do Processo 1   | default    |
| ENTRAR       | Seção de login  | default    |

**Seção de Login**

| **Campo**  | **Tipo**             | **Restrições**         | **Valor default** |
| ---        | ---                  | ---                    | ---               |
| login      | Caixa de Texto       | formato de e-mail      | default           |
| senha      | Caixa de Texto       | mínimo de 8 caracteres | default           |

| **Comandos** | **Destino**        | **Tipo**   |
| ---          | ---                | ---        |
| ENTRAR       | Fim do Processo 1  | default    |
| CADASTRAR    | Seção de cadastro  | default    |

**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |
