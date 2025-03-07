const { Event } = require('../models');

class EventService {
  // Obtener todos los eventos
  async getAllEvents() {
    return await Event.findAll();
  }

  // Obtener un evento por ID
  async getEventById(id) {
    return await Event.findByPk(id);
  }

  // Crear un nuevo evento
  async createEvent(eventData) {
    return await Event.create(eventData);
  }

  // Actualizar un evento
  async updateEvent(id, eventData) {
    const event = await Event.findByPk(id);
    if (!event) return null;

    return await event.update(eventData);
  }

  // Eliminar un evento
  async deleteEvent(id) {
    const event = await Event.findByPk(id);
    if (!event) return false;

    await event.destroy();
    return true;
  }
}

module.exports = new EventService();