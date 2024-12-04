const db = require('../Database/database.js');

const create = (data, callback) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = data;
    const query = 'INSERT INTO Clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM Clientes';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = data;
    const query = 'UPDATE Clientes SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, id], callback);
};

const deleteClientes = (id, callback) => {
    const query = 'DELETE FROM Clientes WHERE cliente_id = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deleteClientes };

