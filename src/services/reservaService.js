const { Reserva, Evento, Asistente } = require('../models');

class ReservaService {
  // Obtener todas las reservas
  async getAllReservas() {
    return await Reserva.findAll({
      include: [
        { model: Evento, as: 'evento' },
        { model: Asistente, as: 'asistente' }
      ]
    });
  }

  // Obtener una reserva por ID
  async getReservaById(id) {
    return await Reserva.findByPk(id, {
      include: [
        { model: Evento, as: 'evento' },
        { model: Asistente, as: 'asistente' }
      ]
    });
  }

  // Obtener reservas por evento
  async getReservasByEvento(eventoId) {
    return await Reserva.findAll({
      where: { eventoId },
      include: [
        { model: Asistente, as: 'asistente' }
      ]
    });
  }

  // Obtener reservas por asistente
  async getReservasByAsistente(asistenteId) {
    return await Reserva.findAll({
      where: { asistenteId },
      include: [
        { model: Evento, as: 'evento' }
      ]
    });
  }

  // Crear una nueva reserva
  async createReserva(reservaData) {
    // Verificar si el evento existe
    const evento = await Evento.findByPk(reservaData.eventoId);
    if (!evento) {
      throw new Error('El evento especificado no existe');
    }

    // Verificar si el asistente existe
    const asistente = await Asistente.findByPk(reservaData.asistenteId);
    if (!asistente) {
      throw new Error('El asistente especificado no existe');
    }

    return await Reserva.create(reservaData);
  }

  // Eliminar una reserva
  async deleteReserva(id) {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) return false;

    await reserva.destroy();
    return true;
  }
}

module.exports = new ReservaService();