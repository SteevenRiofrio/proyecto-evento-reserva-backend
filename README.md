# Sistema de Gestión de Reservas de Eventos

Este proyecto implementa un sistema de reserva de eventos con una arquitectura de microservicios. Permite crear eventos y gestionar las reservas para estos eventos.

## Estructura del Proyecto

El proyecto sigue los principios de arquitectura limpia:

```
src/
├── config/         # Configuraciones de la aplicación
│   └── database.js # Configuración de la conexión a PostgreSQL
├── controllers/    # Controladores de la API
│   ├── eventController.js
│   └── bookingController.js
├── middlewares/    # Middlewares de validación y error handling
│   ├── eventValidation.js
│   ├── bookingValidation.js
│   └── validationMiddleware.js
├── migrations/     # Migraciones de Sequelize para la base de datos
├── models/         # Modelos de datos
│   ├── Event.js
│   ├── Booking.js
│   └── index.js
├── routes/         # Definición de rutas
│   ├── eventRoutes.js
│   ├── bookingRoutes.js
│   └── index.js
├── services/       # Lógica de negocio
│   ├── eventService.js
│   └── bookingService.js
├── app.js          # Configuración Express
└── server.js       # Punto de entrada
```

## Modelo Entidad-Relación

El sistema se basa en dos entidades principales:

- **Eventos (`events`)**: Representa un evento disponible para reserva.
- **Reservas (`bookings`)**: Representa una reserva realizada por un usuario para un evento.

**Relación**:
- Un evento puede tener **muchas reservas**.
- Una reserva pertenece **a un solo evento**.

### Esquema de la base de datos

**Tabla events:**
- id: UUID (Primary Key)
- name: VARCHAR(100) NOT NULL
- description: TEXT
- date: TIMESTAMP NOT NULL
- capacity: INTEGER NOT NULL
- created_at: TIMESTAMP NOT NULL
- updated_at: TIMESTAMP NOT NULL

**Tabla bookings:**
- id: UUID (Primary Key)
- event_id: UUID NOT NULL (Foreign Key → events.id)
- user_email: VARCHAR(100) NOT NULL
- num_tickets: INTEGER NOT NULL
- created_at: TIMESTAMP NOT NULL
- updated_at: TIMESTAMP NOT NULL

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Express.js**: Framework web para Node.js.
- **PostgreSQL**: Sistema de gestión de bases de datos.
- **Sequelize**: ORM para Node.js con soporte para PostgreSQL.
- **Docker**: Para contenerizar la base de datos PostgreSQL.
- **Docker Compose**: Para orquestar los contenedores.

## Endpoints API

### Eventos (`/api/events`)

- **GET /api/events**: Obtener todos los eventos
- **GET /api/events/:id**: Obtener un evento específico por ID
- **POST /api/events**: Crear un nuevo evento
- **PUT /api/events/:id**: Actualizar un evento existente
- **DELETE /api/events/:id**: Eliminar un evento

### Reservas (`/api/bookings`)

- **GET /api/bookings**: Obtener todas las reservas
- **GET /api/bookings/:id**: Obtener una reserva específica por ID
- **GET /api/bookings/event/:eventId**: Obtener todas las reservas para un evento específico
- **POST /api/bookings**: Crear una nueva reserva
- **DELETE /api/bookings/:id**: Eliminar una reserva

## Instalación y Configuración

### Usando Docker (recomendado)

1. **Clonar el repositorio**:
   ```
   git clone <url-repositorio>
   cd <nombre-carpeta>
   ```

2. **Instalar dependencias**:
   ```
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto (puedes usar el archivo `.env.example` como plantilla).

4. **Iniciar los servicios de Docker**:
   ```
   docker-compose up -d
   ```
   Esto iniciará PostgreSQL en el puerto 5432 y pgAdmin en el puerto 5050.

5. **Ejecutar migraciones** (si es tu primera ejecución):
   ```
   npx sequelize-cli db:migrate
   ```

6. **Iniciar el servidor**:
   ```
   npm start
   ```

7. **Acceder a pgAdmin** (opcional):
   - Abre un navegador y ve a `http://localhost:5050`
   - Inicia sesión con:
     - Email: `admin@admin.com`
     - Password: `admin`
   - Conectar a la base de datos:
     - Host: `postgres`
     - Port: `5432`
     - Username: `postgres`
     - Password: `postgres`
     - Database: `eventos_db`

### Instalación sin Docker

1. **Asegúrate de tener PostgreSQL instalado** en tu sistema.

2. **Clonar el repositorio**:
   ```
   git clone <url-repositorio>
   cd <nombre-carpeta>
   ```

3. **Instalar dependencias**:
   ```
   npm install
   ```

4. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   DB_USERNAME=usuario
   DB_PASSWORD=contraseña
   DB_DATABASE=nombre_db
   DB_HOST=localhost
   DB_DIALECT=postgres
   PORT=3000
   ```

5. **Ejecutar migraciones**:
   ```
   npx sequelize-cli db:migrate
   ```

6. **Iniciar el servidor**:
   ```
   npm start
   ```

## Ejemplos de Uso de la API

### Crear un evento
```bash
curl -X POST http://localhost:3000/api/events \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Conferencia de Tecnología",
    "description": "Una conferencia sobre las últimas tendencias tecnológicas",
    "date": "2025-04-15T10:00:00.000Z",
    "capacity": 100
  }'
```

### Realizar una reserva
```bash
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "event_id": "evento-uuid",
    "user_email": "usuario@ejemplo.com",
    "num_tickets": 2
  }'
```

### Obtener todos los eventos
```bash
curl -X GET http://localhost:3000/api/events
```

### Obtener reservas de un evento específico
```bash
curl -X GET http://localhost:3000/api/bookings/event/evento-uuid
```

## Contribución

Si deseas contribuir a este proyecto, por favor:
1. Haz un fork del repositorio
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`)
4. Empuja la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request
