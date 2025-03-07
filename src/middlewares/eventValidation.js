const { body } = require('express-validator');
const { validateRequest } = require('./validationMiddleware');

const validateCreateEvent = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ max: 100 }).withMessage('El nombre no puede exceder los 100 caracteres'),
  body('description')
    .optional()
    .isString().withMessage('La descripción debe ser texto'),
  body('date')
    .notEmpty().withMessage('La fecha es obligatoria')
    .isISO8601().withMessage('Formato de fecha inválido'),
  body('capacity')
    .notEmpty().withMessage('La capacidad es obligatoria')
    .isInt({ min: 1 }).withMessage('La capacidad debe ser un número entero positivo'),
  validateRequest
];

module.exports = {
  validateCreateEvent
};