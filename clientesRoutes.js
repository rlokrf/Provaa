const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.post('/', clientesController.createClientes);
router.get('/', clientesController.readClientes);
router.put('/:id', clientesController.updateClientes);
router.delete('/:id', clientesController.deleteClientes);


module.exports = router;