const { body } = require('express-validator');
const { validateRequest } = require('./validationMiddleware');

const validateCreateEvento = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ max: 255 }).withMessage('El nombre no puede exceder los 255 caracteres'),
  body('fecha')
    .notEmpty().withMessage('La fecha es obligatoria')
    .isISO8601().withMessage('Formato de fecha inválido'),
  body('lugar')
    .notEmpty().withMessage('El lugar es obligatorio')
    .isLength({ max: 255 }).withMessage('El lugar no puede exceder los 255 caracteres'),
  validateRequest
];

module.exports = {
  validateCreateEvento
};