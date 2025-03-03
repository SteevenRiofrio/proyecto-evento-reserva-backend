const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const routes = require('./routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentación de la API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/api', routes);

// Ruta básica para verificar funcionamiento
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'API de Gestión de Eventos y Reservas' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).send({ error: 'Error del servidor', message: err.message });
});

module.exports = app;