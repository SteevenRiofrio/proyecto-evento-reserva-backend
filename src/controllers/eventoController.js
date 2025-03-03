const eventoService = require('../services/eventoService');

class EventoController {
  // Obtener todos los eventos
  async getAllEventos(req, res) {
    try {
      const eventos = await eventoService.getAllEventos();
      return res.status(200).json(eventos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener un evento por su id
  async getEventoById(req, res) {
    try {
      const { id } = req.params;
      const evento = await eventoService.getEventoById(id);
      
      if (!evento) {
        return res.status(404).json({ message: 'Evento no encontrado' });
      }
      
      return res.status(200).json(evento);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Crear un nuevo evento
  async createEvento(req, res) {
    try {
      const evento = await eventoService.createEvento(req.body);
      return res.status(201).json(evento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Actualizar un evento
  async updateEvento(req, res) {
    try {
      const { id } = req.params;
      const evento = await eventoService.updateEvento(id, req.body);
      
      if (!evento) {
        return res.status(404).json({ message: 'Evento no encontrado' });
      }
      
      return res.status(200).json(evento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Eliminar un evento
  async deleteEvento(req, res) {
    try {
      const { id } = req.params;
      const deleted = await eventoService.deleteEvento(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Evento no encontrado' });
      }
      
      return res.status(200).json({ message: 'Evento eliminado exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new EventoController();