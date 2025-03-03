const { body } = require('express-validator');
const { validateRequest } = require('./validationMiddleware');

const validateCreateAsistente = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ max: 100 }).withMessage('El nombre no puede exceder los 100 caracteres'),
  body('email')
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('Formato de email inválido')
    .isLength({ max: 100 }).withMessage('El email no puede exceder los 100 caracteres'),
  validateRequest
];

module.exports = {
  validateCreateAsistente
};