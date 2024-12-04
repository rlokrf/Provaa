const clientesModel = require('../models/clientesModel.js');

const createClientes = (req, res) => {
    clientesModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Cliente criado com sucesso', result });
    });
};

const readClientes = (req, res) => {
    clientesModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateClientes = (req, res) => {
    clientesModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente atualizado com sucesso', result });
    });
};

const deleteClientes = (req, res) => {
    clientesModel.deleteClientes(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente removido com sucesso', result });
    });
};

module.exports = { createClientes, readClientes, updateClientes, deleteClientes};