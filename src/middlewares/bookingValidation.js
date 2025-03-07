const { body } = require('express-validator');
const { validateRequest } = require('./validationMiddleware');

const validateCreateBooking = [
  body('event_id')
    .notEmpty().withMessage('El ID del evento es obligatorio')
    .isUUID().withMessage('El ID del evento debe ser un UUID válido'),
  body('user_email')
    .notEmpty().withMessage('El email del usuario es obligatorio')
    .isEmail().withMessage('Formato de email inválido')
    .isLength({ max: 100 }).withMessage('El email no puede exceder los 100 caracteres'),
  body('num_tickets')
    .notEmpty().withMessage('El número de tickets es obligatorio')
    .isInt({ min: 1 }).withMessage('El número de tickets debe ser un número entero positivo'),
  validateRequest
];

module.exports = {
  validateCreateBooking
};