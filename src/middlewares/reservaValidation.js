const { body } = require('express-validator');
const { validateRequest } = require('./validationMiddleware');

const validateCreateReserva = [
  body('eventoId')
    .notEmpty().withMessage('El ID del evento es obligatorio')
    .isInt().withMessage('El ID del evento debe ser un número entero'),
  body('asistenteId')
    .notEmpty().withMessage('El ID del asistente es obligatorio')
    .isInt().withMessage('El ID del asistente debe ser un número entero'),
  body('fecha_reserva')
    .optional()
    .isISO8601().withMessage('Formato de fecha inválido'),
  validateRequest
];

module.exports = {
  validateCreateReserva
};