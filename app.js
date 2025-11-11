const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Banco e rotas
require('./config/db');
const operationRoutes = require('./routes/operationRoutes');
const receiverRoutes = require('./routes/receiverRoutes');

app.use('/operations', operationRoutes);
app.use('/receivers', receiverRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
