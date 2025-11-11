// config/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'db.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Erro ao conectar ao SQLite:', err.message);
  else console.log('Conectado ao banco SQLite');
});

// Tabela de Recebedores
db.run(`
  CREATE TABLE IF NOT EXISTS receivers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )
`);

// Tabela de Operações
db.run(`
  CREATE TABLE IF NOT EXISTS operations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valor REAL NOT NULL,
    status TEXT DEFAULT 'pendente',
    data TEXT DEFAULT CURRENT_TIMESTAMP,
    receiver_id INTEGER,
    FOREIGN KEY (receiver_id) REFERENCES receivers(id)
  )
`);

module.exports = db;
