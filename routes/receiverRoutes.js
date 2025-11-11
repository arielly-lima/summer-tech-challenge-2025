const express = require('express');
const router = express.Router();
const receiverController = require('../controllers/receiverController');

router.get('/:id', receiverController.buscarReceiver);

module.exports = router;
