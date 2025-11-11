const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationController');

router.post('/', operationController.criarOperacao);
router.get('/:id', operationController.buscarOperacao);
router.post('/:id/confirm', operationController.confirmarOperacao);

module.exports = router;
