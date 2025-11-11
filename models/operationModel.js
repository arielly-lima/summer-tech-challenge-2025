// models/operationModel.js
const db = require('../config/db');

const Operation = {
  create: (valor, receiver_id, callback) => {
    db.run(
      `INSERT INTO operations (valor, receiver_id) VALUES (?, ?)`,
      [valor, receiver_id],
      function (err) {
        callback(err, { id: this.lastID, valor, receiver_id, status: 'pendente' });
      }
    );
  },

  findById: (id, callback) => {
    db.get(`SELECT * FROM operations WHERE id = ?`, [id], (err, row) => {
      callback(err, row);
    });
  },

  confirm: (id, callback) => {
    db.run(`UPDATE operations SET status = 'confirmada' WHERE id = ?`, [id], function (err) {
      callback(err, { id, status: 'confirmada' });
    });
  },
};

module.exports = Operation;
