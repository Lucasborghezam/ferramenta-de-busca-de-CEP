# 📌 Consulta de Endereço via CEP

Este é um projeto que permite consultar endereços através do CEP utilizando a API pública ViaCEP. Os endereços consultados são armazenados para futuras consultas e podem ser ordenados por **Bairro, Cidade e Estado**.

🔗 **Acesse o projeto online:** [Consultador de CEP](https://lucasborghezam.github.io/Consultador-de-CEP/)
---

## 🚀 Funcionalidades

✅ Buscar informações de endereço a partir do CEP.  
✅ Exibir os dados retornados em uma tabela organizada.  
✅ Armazenar os endereços pesquisados (localStorage).  
✅ Permitir ordenação da tabela pelos campos: **Bairro, Cidade e Estado**.  
✅ Adicionar barra de rolagem para tabelas extensas.  

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página.
- **CSS3** - Estilização da interface.
- **JavaScript** - Lógica da aplicação.
- **API ViaCEP** - Obtenção de dados de endereço via requisição HTTP.

---

## 📷 Layout da Interface

A interface consiste em:
- Um campo para inserir o CEP e um botão para buscar.
- Uma mensagem de erro caso o CEP seja inválido.
- Uma tabela onde os endereços buscados são listados.
- Botões para ordenar os endereços pelos campos desejados.

---

## 📥 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Lucasborghezam/Consultador-de-CEP.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Consultador-de-CEP
   ```
3. Abra o arquivo `index.html` no navegador.

---

## 🔧 Como Funciona

1. O usuário insere um CEP no campo de entrada.
2. Ao clicar em "Buscar Endereço", uma requisição é feita para a API ViaCEP.
3. Se o CEP for válido, as informações são exibidas na tabela.
4. Os endereços são armazenados para consultas futuras.
5. O usuário pode ordenar os endereços pelos campos disponíveis.

---

## 🔗 API Utilizada

- [ViaCEP](https://viacep.com.br/)





