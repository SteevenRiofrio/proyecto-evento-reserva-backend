const { Evento } = require('../models');

class EventoService {
  // Obtener todos los eventos
  async getAllEventos() {
    return await Evento.findAll();
  }

  // Obtener un evento por ID
  async getEventoById(id) {
    return await Evento.findByPk(id);
  }

  // Crear un nuevo evento
  async createEvento(eventoData) {
    return await Evento.create(eventoData);
  }

  // Actualizar un evento
  async updateEvento(id, eventoData) {
    const evento = await Evento.findByPk(id);
    if (!evento) return null;

    return await evento.update(eventoData);
  }

  // Eliminar un evento
  async deleteEvento(id) {
    const evento = await Evento.findByPk(id);
    if (!evento) return false;

    await evento.destroy();
    return true;
  }
}

module.exports = new EventoService();