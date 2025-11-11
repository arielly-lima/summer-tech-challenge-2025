// controllers/receiverController.js
const Receiver = require('../models/receiverModel');

exports.buscarReceiver = (req, res) => {
  const { id } = req.params;

  Receiver.findById(id, (err, receiver) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar recebedor' });
    if (!receiver) return res.status(404).json({ message: 'Recebedor não encontrado' });
    res.json(receiver);
  });
};
