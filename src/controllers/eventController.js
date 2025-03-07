const eventService = require('../services/eventService');

class EventController {
  // Obtener todos los eventos
  async getAllEvents(req, res) {
    try {
      const events = await eventService.getAllEvents();
      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener un evento por su id
  async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await eventService.getEventById(id);
      
      if (!event) {
        return res.status(404).json({ message: 'Evento no encontrado' });
      }
      
      return res.status(200).json(event);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Crear un nuevo evento
  async createEvent(req, res) {
    try {
      const event = await eventService.createEvent(req.body);
      return res.status(201).json(event);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Actualizar un evento
  async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const event = await eventService.updateEvent(id, req.body);
      
      if (!event) {
        return res.status(404).json({ message: 'Evento no encontrado' });
      }
      
      return res.status(200).json(event);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Eliminar un evento
  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const deleted = await eventService.deleteEvent(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Evento no encontrado' });
      }
      
      return res.status(200).json({ message: 'Evento eliminado exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new EventController();