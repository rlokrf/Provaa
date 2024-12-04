const express = require('express');
const cors = require ('cors');

const clientesRoutes = require ('./routes/clientesRoutes');
const professoresRoutes = require ('./routes/professoresRoutes');
const telefonesRoutes = require ('./routes/telefonesRoutes');
const veiculosRoutes = require ('./routes/veiculosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/clientes', clientesRoutes);
app.use('/professor', professoresRoutes);
app.use('/telefones', telefonesRoutes);
app.use('/veiculos', veiculosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});