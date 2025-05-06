### 3.2.2 Processo 2 – Processo de Cadastramento de Produto

O processo de cadastro de produto é a funcionalidade responsável por registrar todas as informações relevantes de um item que será controlado no estoque. Esse processo é essencial para garantir a organização, rastreabilidade e gerenciamento dos produtos dentro do sistema.

![registro de produto](https://github.com/user-attachments/assets/653a89fc-71a7-493d-b0c7-0873a38f3610)

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_**Caixa de texto** - campo texto de uma linha_

_**Código do produto** - campo numérico_

_**Seleção única de categoria** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_**Seleção única Quantidade** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_**Preço do produto** - campo numérico_

_**Caixa de texto** - campo texto de uma linha_

_**Data de validade** - campo do tipo data (dd-mm-aaaa)_

<br>

**Atividade 1 - Acessar sistema**

| **Campo**       | **Tipo** | **Restrições**               | **Valor default** |
|-----------------|----------|-------------------------------|-------------------|
| botão "Acessar" | Botão    | visível na tela inicial       | default           |

| **Comandos** | **Destino**    | **Tipo**  |
|--------------|----------------|-----------|
| ACESSAR      | Tela principal | default   |

**Atividade 2 - Selecionar opção de registro**

| **Campo**               | **Tipo**   | **Restrições**                   | **Valor default** |
|-------------------------|------------|----------------------------------|-------------------|
| botão "Registrar produto" | Botão    | visível na tela principal       | default           |

| **Comandos** | **Destino**                | **Tipo**  |
|--------------|----------------------------|-----------|
| SELECIONAR   | Seção de cadastro de produto | default   |


**Atividade 3 - Preencher informações do produto**

| **Campo**            | **Tipo**                 | **Restrições**                             | **Valor default** |
| -------------------- | ------------------------ | ------------------------------------------ | ----------------- |
| Código do produto | Campo numérico | Nenhuma restrição específica | default |
| Seleção única de categoria | Listbox | Uma opção | default |
| Seleção única Quantidade | Listbox | Uma opção | default |
| Preço do produto | Campo numérico | Nenhuma restrição específica | default |
| Caixa de texto | Caixa de texto | Nenhuma restrição específica | default |
| Data de validade | Campo de data (dd-mm-aaaa) | Formato de data: dd-mm-aaaa | default |


| **Comandos** |  **Destino** | **Tipo** |
| ------------ | --------------- | --- |
| Cadastrar | Fim do Processo 1 | default |
| Cancelar | Início do proceso de cadastro de produto | default |

**Atividade 4 - Acessar painel administrativo**

| **Campo**                  | **Tipo**                       | **Restrições**                             | **Valor default** |
|----------------------------|--------------------------------|--------------------------------------------|-------------------|
| botão "Painel Administrativo" | Botão                    | visível após login                         | default           |

| **Comandos** | **Destino**               | **Tipo**  |
|--------------|---------------------------|-----------|
| ACESSAR      | Painel administrativo     | default   |

**Atividade 5 - Editar informações do produto**

| **Campo**                  | **Tipo**                       | **Restrições**                             |
|----------------------------|--------------------------------|--------------------------------------------|
| Código do produto          | Campo numérico                 | Nenhuma restrição específica               |
| Categoria (seleção única) | Listbox                        | Exclusivo, uma opção por vez               |
| Quantidade (seleção múltipla) | Listbox                    | Múltiplas opções podem ser selecionadas    |
| Preço do produto           | Campo numérico                 | Nenhuma restrição específica               |
| Caixa de texto             | Texto livre (1 linha)          | Nenhuma restrição específica               |
| Data de validade           | Campo de data (dd-mm-aaaa)     | Formato de data: dd-mm-aaaa                |


| **Comandos** |  **Destino** | **Tipo** |
| --- | --- | --- |
| Editar | Fim do Processo 1 | (submit) |
| Cancelar | Início do proceso de cadastro de produto | (cancel) |
