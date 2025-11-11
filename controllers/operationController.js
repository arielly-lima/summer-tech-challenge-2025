// controllers/operationController.js
const Operation = require('../models/operationModel');

exports.criarOperacao = (req, res) => {
  const { valor, receiver_id } = req.body;

  if (!valor || !receiver_id) {
    return res.status(400).json({ message: 'Valor e receiver_id são obrigatórios' });
  }

  Operation.create(valor, receiver_id, (err, operacao) => {
    if (err) return res.status(500).json({ message: 'Erro ao criar operação' });
    res.status(201).json(operacao);
  });
};

exports.buscarOperacao = (req, res) => {
  const { id } = req.params;

  Operation.findById(id, (err, operacao) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar operação' });
    if (!operacao) return res.status(404).json({ message: 'Operação não encontrada' });
    res.json(operacao);
  });
};

exports.confirmarOperacao = (req, res) => {
  const { id } = req.params;

  Operation.confirm(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erro ao confirmar operação' });
    res.json({ message: 'Operação confirmada com sucesso', ...result });
  });
};
