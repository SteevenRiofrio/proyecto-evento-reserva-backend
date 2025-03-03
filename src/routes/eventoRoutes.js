const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');
const { validateCreateEvento } = require('../middlewares/eventoValidation');

router.get('/', eventoController.getAllEventos);
router.get('/:id', eventoController.getEventoById);
router.post('/', validateCreateEvento, eventoController.createEvento);
router.put('/:id', validateCreateEvento, eventoController.updateEvento);
router.delete('/:id', eventoController.deleteEvento);

module.exports = router;