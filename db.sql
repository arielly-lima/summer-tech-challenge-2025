CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

INSERT INTO users (nome, email)
VALUES ('Maria', 'maria@email.com');
