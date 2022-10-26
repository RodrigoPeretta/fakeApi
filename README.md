<h1 align="center">
      API FAKE
</h1>

## Sobre o projeto

API simples para simular chamadas GET e POST 

## Como executar o projeto

```bash

# Acesse a pasta do projeto no seu terminal/cmd
$ cd FakeApi

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:8787 - acesse http://localhost:8787

```

---

## Endpoints

# GET - Status da API
http://localhost:8787/

# GET - Recebe uma resposta de está ou não finalizado
http://localhost:8787/random/:id

# POST - Gera um ID Randomico junto ao Body, a requisição é respondida em um intervalo de até 10s (random)
http://localhost:8787/postNumber

# GET - Mostra o log da aplicação
http://localhost:8787/readLog

# DELETE - Limpa o log da aplicação
http://localhost:8787/clearLog

---

## Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

#### **Server**  ([NodeJs](https://nodejs.org/en/))
