### 3.2.4 Processo 4 – Processo de Suporte ao Usuário

O processo de suporte ao usuário envolve o esclarecimento de dúvidas, a resolução de problemas e o fornecimento de feedback sobre o sistema, garantindo uma experiência eficiente e satisfatória.

![processo de suporte](https://github.com/user-attachments/assets/9bfa16df-bdfe-4afe-b59b-c2d2a88f2a76)

#### Detalhamento das atividades

Os tipos de dados a serem utilizados são:

_**Caixa de texto -> Nome** – campo texto de uma linha_  
_**Caixa de texto -> Email** – campo texto de uma linha_  
_**Listbox** – seleção de opções em lista_  
_**Caixa de texto** – campo texto de múltiplas linhas_  
_**Seleção numérica** – campo de nota (ex: de 1 a 5)_

<br>

**Atividade 1 - Acessar a seção de suporte**

| **Campo**           | **Tipo** | **Restrições**               | **Valor default** |
|---------------------|----------|-------------------------------|-------------------|
| botão "Suporte"     | Botão    | | default           |

| **Comandos** | **Destino**         | **Tipo**  |
|--------------|---------------------|-----------|
| ACESSAR      | Seção de suporte    | default   |

**Atividade 2 - Consultar FAQ ou tutoriais**

| **Campo**              | **Tipo**    | **Restrições**                   | **Valor default** |
|------------------------|-------------|----------------------------------|-------------------|
| Lista de tópicos FAQ   | Lista       | itens navegáveis | default           |
| Links para tutoriais   | Lista   | itens navegáveis | default           |

| **Comandos** | **Destino**                 | **Tipo**  |
|--------------|-----------------------------|-----------|
| CONSULTAR    | Conteúdo de ajuda (FAQ/tutorial) | default   |

**Atividade 3 - Preencher formulário descrevendo o problema**

| **Campo**                | **Tipo**            | **Restrições**                                  | **Valor default** |
|--------------------------|---------------------|-------------------------------------------------|-------------------|
| Nome do usuário          | Caixa de texto      | obrigatório                                     | default           |
| E-mail                   | Caixa de texto      | formato de e-mail válido                        | default           |
| Categoria do problema    | Listbox             | seleção obrigatória                             | default           |
| Descrição do problema    | Caixa de texto longa| obrigatório, mínimo 20 caracteres               | default           |

| **Comandos** | **Destino**               | **Tipo**  |
|--------------|---------------------------|-----------|
| PREENCHER    | Formulário de suporte     | default   |

**Atividade 4 - Enviar feedback**

| **Campo**           | **Tipo**            | **Restrições**                         | **Valor default** |
|---------------------|---------------------|----------------------------------------|-------------------|
| Avaliação (1 a 5)   | Seleção    | obrigatória | default           |
| Comentário opcional | Caixa de texto      | máximo de 300 caracteres | default           |

| **Comandos** | **Destino**           | **Tipo**  |
|--------------|-----------------------|-----------|
| ENVIAR       | Seção de suporte   | default   |
