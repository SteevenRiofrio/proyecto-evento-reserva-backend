const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

const maxAttempts = 20;
let attempts = 0;

const tryConnect = () => {
  attempts++;
  console.log(`Intento de conexión ${attempts}/${maxAttempts}...`);
  
  client.connect()
    .then(() => {
      console.log('Conexión a PostgreSQL establecida correctamente');
      client.end();
      process.exit(0);
    })
    .catch((err) => {
      console.log('No se pudo conectar a PostgreSQL:', err.message);
      
      if (attempts >= maxAttempts) {
        console.error('Número máximo de intentos alcanzado. Saliendo...');
        process.exit(1);
      } else {
        setTimeout(tryConnect, 1500);
      }
    });
};

tryConnect();