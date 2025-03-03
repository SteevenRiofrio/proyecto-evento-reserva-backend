const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Eventos y Reservas',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar eventos y reservas'
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Servidor de Desarrollo'
      }
    ],
    tags: [
      {
        name: 'Eventos',
        description: 'Operaciones relacionadas con eventos'
      },
      {
        name: 'Asistentes',
        description: 'Operaciones relacionadas con asistentes'
      },
      {
        name: 'Reservas',
        description: 'Operaciones relacionadas con reservas'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;