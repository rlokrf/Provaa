const veiculosModel = require('../models/veiculosModel.js');

const createveiculos = (req, res) => {
    veiculosModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Veiculo criado com sucesso', result });
    });
};

const readveiculos = (req, res) => {
    veiculosModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateveiculos = (req, res) => {
    veiculosModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Veiculo atualizado com sucesso', result });
    });
};

const deleteveiculos = (req, res) => {
    veiculosModel.deleteveiculos(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Veiculo removido com sucesso', result });
    });
};

module.exports = { createveiculos, readveiculos, updateveiculos, deleteveiculos};