const telefonesModel = require('../models/telefonesModel');

const createtelefones = (req, res) => {
    telefonesModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Telefone criado com sucesso', result });
    });
};

const readtelefones = (req, res) => {
    telefonesModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updatetelefones = (req, res) => {
    telefonesModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Telefone atualizado com sucesso', result });
    });
};

const deletetelefones = (req, res) => {
    telefonesModel.deletetelefone(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Telefone removido com sucesso', result });
    });
};

module.exports = { createtelefones, readtelefones, updatetelefones, deletetelefones};