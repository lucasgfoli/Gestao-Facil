### 3.2.3 Processo 3 – Processo de Gestão de Estoque

O processo de gestão de estoque envolve o controle das entradas e saídas de produtos em uma loja. Ele começa com o recebimento de mercadorias enviadas por fornecedores, momento em que os produtos são registrados como entrada no estoque.

Além disso, quando um produto é vendido ou retirado para uso, é realizado o registro de saída, garantindo que o estoque reflita corretamente a quantidade disponível.

![Controle de gestão de estoque](https://github.com/user-attachments/assets/ab2ffd97-99db-4198-ad84-dbe4ce06a40f)

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_**ID do produto** - campo numérico_

_**Nome do produto** - campo texto de uma linha_

_**Seleção de quantidade** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_**Data da venda** - campo do tipo data (dd-mm-aaaa)_

_**Tipo de pagamento** - campo texto de uma linha_

_**Preço do produto** - campo numérico_

<br>

**Atividade 1 - Acessar sistema**

| **Campo**       | **Tipo** | **Restrições**               | **Valor default** |
|-----------------|----------|-------------------------------|-------------------|
| botão "Acessar" | Botão    | visível na tela inicial       | default           |

| **Comandos** | **Destino**    | **Tipo**  |
|--------------|----------------|-----------|
| ACESSAR      | Tela principal | default   |

**Atividade 2 - Selecionar opção de entrada**

| **Campo**               | **Tipo**   | **Restrições**                     | **Valor default** |
|-------------------------|------------|------------------------------------|-------------------|
| botão "Entrar no sistema" | Botão    | visível na tela inicial            | default           |
| botão "Acessar como administrador" | Botão | visível para perfis autorizados | default           |

| **Comandos** | **Destino**                  | **Tipo**  |
|--------------|------------------------------|-----------|
| SELECIONAR   | Tela de login ou painel administrativo | default   |


**Atividade 3 - Registrar Entrada**

| **Campo**         | **Tipo**                       | **Restrições**                             |
|-------------------|--------------------------------|--------------------------------------------|
| Nome              | Caixa de texto (1 linha)       | Nenhuma restrição específica               |
| Quantidade        | Seleção única (radio/combobox) | Exclusivo, uma opção por vez               |
| Data de entrega   | Campo de data (dd-mm-aaaa)     | Formato de data: dd-mm-aaaa                |
| Fornecedor        | Caixa de texto (1 linha)       | Nenhuma restrição específica               |

| **Comandos** |  **Destino** | **Tipo** |
| --- | --- | --- |
| Registrar | Fim do Processo Registro de Entrada | default |
| Cancelar | Início do proceso de Registro de Entrada | default |


**Atividade 4 - Registrar Venda**

| **Campo**           | **Tipo**                       | **Restrições**                             |
|---------------------|--------------------------------|--------------------------------------------|
| ID do produto       | Caixa de texto (1 linha)       | Nenhuma restrição específica               |
| Nome                | Caixa de texto (1 linha)       | Nenhuma restrição específica               |
| Preço               | Caixa de texto (1 linha)       | Deve conter valor numérico                 |
| Tipo de pagamento   | Seleção única (radio/combobox) | Exclusivo, uma opção por vez               |
| Data de pagamento   | Campo de data (dd-mm-aaaa)     | Formato de data: dd-mm-aaaa                |

| **Comandos** |  **Destino** | **Tipo** |
| --- | --- | --- |
| Registrar Venda | Fim do Processo Registro de Venda | default |
| Cancelar | Início do proceso de Registro de Venda | default |
