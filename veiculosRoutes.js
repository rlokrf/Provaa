const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController');

router.post('/', veiculosController.createveiculos);
router.get('/', veiculosController.readveiculos);
router.put('/:id', veiculosController.updateveiculos);
router.delete('/:id', veiculosController.deleteveiculos);


module.exports = router;