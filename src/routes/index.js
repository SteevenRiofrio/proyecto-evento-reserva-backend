const express = require('express');
const router = express.Router();
const eventoRoutes = require('./eventoRoutes');
const asistenteRoutes = require('./asistenteRoutes');
const reservaRoutes = require('./reservaRoutes');

router.use('/eventos', eventoRoutes);
router.use('/asistentes', asistenteRoutes);
router.use('/reservas', reservaRoutes);

module.exports = router;