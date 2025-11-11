// models/receiverModel.js
const db = require('../config/db');

const Receiver = {
  findById: (id, callback) => {
    db.get(`SELECT * FROM receivers WHERE id = ?`, [id], (err, receiver) => {
      if (err || !receiver) return callback(err, null);

      db.all(
        `SELECT * FROM operations WHERE receiver_id = ? ORDER BY data DESC`,
        [id],
        (err2, operations) => {
          callback(err2, { ...receiver, historico: operations });
        }
      );
    });
  },
};

module.exports = Receiver;
