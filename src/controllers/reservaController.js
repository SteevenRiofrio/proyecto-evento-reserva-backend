const reservaService = require('../services/reservaService');

class ReservaController {
  // Obtener todas las reservas
  async getAllReservas(req, res) {
    try {
      const reservas = await reservaService.getAllReservas();
      return res.status(200).json(reservas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener una reserva por ID
  async getReservaById(req, res) {
    try {
      const { id } = req.params;
      const reserva = await reservaService.getReservaById(id);
      
      if (!reserva) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      
      return res.status(200).json(reserva);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener reservas por evento
  async getReservasByEvento(req, res) {
    try {
      const { eventoId } = req.params;
      const reservas = await reservaService.getReservasByEvento(eventoId);
      return res.status(200).json(reservas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener reservas por asistente
  async getReservasByAsistente(req, res) {
    try {
      const { asistenteId } = req.params;
      const reservas = await reservaService.getReservasByAsistente(asistenteId);
      return res.status(200).json(reservas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Crear una nueva reserva
  async createReserva(req, res) {
    try {
      const reserva = await reservaService.createReserva(req.body);
      return res.status(201).json(reserva);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Eliminar una reserva
  async deleteReserva(req, res) {
    try {
      const { id } = req.params;
      const deleted = await reservaService.deleteReserva(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      
      return res.status(200).json({ message: 'Reserva eliminada exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ReservaController();