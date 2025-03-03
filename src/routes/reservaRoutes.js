const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');
const { validateCreateReserva } = require('../middlewares/reservaValidation');

router.get('/', reservaController.getAllReservas);
router.get('/:id', reservaController.getReservaById);
router.get('/evento/:eventoId', reservaController.getReservasByEvento);
router.get('/asistente/:asistenteId', reservaController.getReservasByAsistente);
router.post('/', validateCreateReserva, reservaController.createReserva);
router.delete('/:id', reservaController.deleteReserva);

module.exports = router;