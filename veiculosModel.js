const db = require('../Database/database');

const create = (data, callback) => {
    const {marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id} = data;
    const query = 'INSERT INTO veiculos (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM veiculos';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const { marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id } = data;
    const query = 'UPDATE veiculos SET marca_veiculo = ?, modelo_veiculo = ?, ano_veiculo = ?, fabricacao_veiculo = ?, cliente_id = ? WHERE veiculos_id = ?';
    db.query(query, [marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, id], callback);
};

const deleteveiculos = (id, callback) => {
    const query = 'DELETE FROM veiculos WHERE veiculos_id = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deleteveiculos };

