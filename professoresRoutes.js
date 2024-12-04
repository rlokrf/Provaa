const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professoresController');

router.post('/', professoresController.createProfessores);
router.get('/', professoresController.readProfessores);
router.put('/:id', professoresController.updateProfessores);
router.delete('/:id', professoresController.deleteProfessores);


module.exports = router;