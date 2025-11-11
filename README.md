# 💙 LocPay Tech Challenge - Summer Job 2025

## Descrição

Este projeto implementa uma **API RESTful** para gerenciamento de **operações financeiras** entre recebedores, utilizando **Express.js**, **SQLite** e arquitetura **MVC**.

A aplicação permite:

- Criar e consultar operações (`operations`);
- Confirmar operações;
- Consultar recebedores e o histórico de operações associadas.

---

## Arquitetura

O projeto segue o padrão **Model-View-Controller (MVC)**:
**summer-tech-challenge-2025**
┣ 📂 config/ # Configuração do banco SQLite
┣ 📂 controllers/ # Lógica de negócio
┣ 📂 models/ # Manipulação direta do banco de dados
┣ 📂 routes/ # Definição das rotas Express
┣ 📜 app.js # Ponto de entrada principal
┗ 📜 db.sqlite # Banco de dados local


---

## Instalação e execução

#### 1️. Clone o repositório

```bash
git clone https://github.com/LocPayLtda/summer-tech-challenge-2025.git
cd summer-tech-challenge-2025
```

#### 2. Instale as dependências

```npm install express body-parser sqlite3 dotenv```

#### 3. Execute o servidor
```
node app.js
```
O servidor estará rodando em: http://localhost:3000

