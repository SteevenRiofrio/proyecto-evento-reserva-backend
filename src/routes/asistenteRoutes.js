const express = require('express');
const router = express.Router();
const asistenteController = require('../controllers/asistenteController');
const { validateCreateAsistente } = require('../middlewares/asistenteValidation');

router.get('/', asistenteController.getAllAsistentes);
router.get('/:id', asistenteController.getAsistenteById);
router.post('/', validateCreateAsistente, asistenteController.createAsistente);
router.put('/:id', validateCreateAsistente, asistenteController.updateAsistente);
router.delete('/:id', asistenteController.deleteAsistente);

module.exports = router;