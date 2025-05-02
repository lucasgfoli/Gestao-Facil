### 3.2.2 Processo 2 – Processo de Cadastramento de Produto

O processo de cadastro de produto é a funcionalidade responsável por registrar todas as informações relevantes de um item que será controlado no estoque. Esse processo é essencial para garantir a organização, rastreabilidade e gerenciamento dos produtos dentro do sistema.

![registro de produto](https://github.com/user-attachments/assets/653a89fc-71a7-493d-b0c7-0873a38f3610)

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Caixa de texto** - campo texto de uma linha_

_* **Código do produto** - campo numérico_

_* **Seleção única de categoria** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla Quantidade** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Preço do produto** - campo numérico_

_* **Caixa de texto** - campo texto de uma linha_

_* **Data de validade** - campo do tipo data (dd-mm-aaaa)_

**Cadastro de produto**

| **Campo**            | **Tipo**                 | **Restrições**                             | **Valor default** |
| -------------------- | ------------------------ | ------------------------------------------ | ----------------- |
| Código do produto    | Campo numérico           | Nenhuma restrição específica               |                   |
| Seleção única de categoria | Listbox                | Exclusivo, uma opção por vez               |                   |
| Seleção múltipla Quantidade | Listbox               | Múltiplas opções podem ser selecionadas    |                   |
| Preço do produto     | Campo numérico           | Nenhuma restrição específica               |                   |
| Caixa de texto       | Caixa de texto           | Nenhuma restrição específica               |                   |
| Data de validade     | Campo de data (dd-mm-aaaa) | Formato de data: dd-mm-aaaa              |                   |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
| ***Exemplo:***       |                                |                   |
| entrar               | Fim do Processo 1              | default           |
| cadastrar            | Início do proceso de cadastro  |                   |


**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |
