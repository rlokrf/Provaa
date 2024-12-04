const db = require('../Database/database');

const create = (data, callback) => {
    const {cliente_id, professor_id, numero, tipo } = data;
    const query = 'INSERT INTO telefone (cliente_id, professor_id, numero, tipo) VALUES (?, ?, ?, ?)';
    db.query(query, [cliente_id, professor_id, numero, tipo], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM telefone';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const {cliente_id, professor_id, numero, tipo } = data;
    const query = 'UPDATE telefone SET cliente_id = ?, professor_id = ?,  numero = ?, tipo = ? WHERE telefone_id = ?';
    db.query(query, [cliente_id, professor_id, numero, tipo, id], callback);
};

const deletetelefone = (id, callback) => {
    const query = 'DELETE FROM telefone WHERE telefone_id = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deletetelefone };

