const express = require('express');
const router = express.Router();
const telefonesController = require('../controllers/telefonesController');

router.post('/', telefonesController.createtelefones);
router.get('/', telefonesController.readtelefones);
router.put('/:id', telefonesController.updatetelefones);
router.delete('/:id', telefonesController.deletetelefones);


module.exports = router;