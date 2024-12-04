const professoresModel = require('../models/professoresModel');

const createProfessores = (req, res) => {
    professoresModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Professor criado com sucesso', result });
    });
};

const readProfessores = (req, res) => {
    professoresModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateProfessores = (req, res) => {
    professoresModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Professor atualizado com sucesso', result });
    });
};

const deleteProfessores = (req, res) => {
    professoresModel.deleteProfessores(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Professor removido com sucesso', result });
    });
};

module.exports = { createProfessores, readProfessores, updateProfessores, deleteProfessores};