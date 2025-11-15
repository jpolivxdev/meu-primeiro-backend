⭐️ Meu Primeiro Backend: API Full CRUD de Usuários
Uma API REST completa para gerenciamento de usuários, desenvolvida com Node.js e Express, com persistência de dados em arquivo JSON. Este projeto serve como um forte alicerce para conceitos de backend, HTTP e manipulação de dados.

🎯 Destaques do Projeto
Este projeto demonstra a implementação de funcionalidades-chave:

CRUD Completo: Suporte a todas as quatro operações fundamentais: Criar (POST), Listar/Consultar (GET), Atualizar (PUT) e Remover (DELETE).

Persistência em JSON: O módulo fs (File System) é usado para salvar e carregar dados automaticamente no arquivo usuarios.json.

Busca Avançada: As rotas de busca, atualização e remoção pelo nome são case-insensitive e accent-insensitive (ignoram acentos), garantindo uma experiência de pesquisa robusta.

Tratamento de Erros: Retorno de status codes HTTP corretos, como 404 Not Found, para usuários não encontrados.

⚙️ Tecnologias Utilizadas
Node.js

Express

JavaScript

File System (fs): Módulo nativo para manipulação de arquivos.

JSON: Formato de persistência de dados.

✨ Endpoints (Rotas da API)
1. Criar Usuário
Método: POST

Caminho: /usuario

Descrição: Cria um novo usuário, salvando-o no usuarios.json.

Status Code de Sucesso: 200 OK (retorna o usuário criado)

Exemplo de Corpo da Requisição:

JSON

{
  "nome": "Maria de Fátima",
  "idade": 25
}
2. Listar Todos os Usuários
Método: GET

Caminho: /usuario (ou /usuarios)

Descrição: Retorna a lista completa de todos os usuários.

Status Code de Sucesso: 200 OK

3. Consultar Usuário por Nome
Método: GET

Caminho: /usuario/:nome

Descrição: Busca um usuário específico pelo nome.

Destaque: A busca é case-insensitive e accent-insensitive (ignora acentos).

Status Codes: 200 OK (encontrado) ou 404 Not Found (não encontrado).

4. Atualizar Usuário
Método: PUT

Caminho: /usuario/:nome

Descrição: Atualiza os dados (nome, idade, etc.) de um usuário existente.

Destaque: A atualização usa a busca semântica (ignora acentos/case).

Status Codes: 200 OK ou 404 Not Found.

5. Remover Usuário
Método: DELETE

Caminho: /usuario/:nome

Descrição: Remove um usuário da lista e salva a alteração no arquivo.

Destaque: A remoção usa a busca semântica (ignora acentos/case).

Status Codes: 200 OK ou 404 Not Found.

🛠️ Como Instalar e Executar
Pré-requisito
Você precisa ter o Node.js instalado em seu sistema.

1. Instalação
Bash

# 1. Clone o repositório
git clone https://github.com/jpolivxdev/meu-primeiro-backend.git

# 2. Acesse o diretório
cd meu-primeiro-backend

# 3. Instale as dependências
npm install
2. Execução
Para ligar o servidor:

Bash

npm start
A API estará disponível em: http://localhost:3000

✍️ Autor
JP. Oliva - jpolivxdev
