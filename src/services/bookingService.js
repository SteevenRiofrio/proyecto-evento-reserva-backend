const { Booking, Event } = require('../models');

class BookingService {
  // Obtener todas las reservas
  async getAllBookings() {
    return await Booking.findAll({
      include: [
        { model: Event, as: 'event' }
      ]
    });
  }

  // Obtener una reserva por ID
  async getBookingById(id) {
    return await Booking.findByPk(id, {
      include: [
        { model: Event, as: 'event' }
      ]
    });
  }

  // Obtener reservas por evento
  async getBookingsByEvent(eventId) {
    return await Booking.findAll({
      where: { event_id: eventId },
      include: [
        { model: Event, as: 'event' }
      ]
    });
  }

  // Crear una nueva reserva
  async createBooking(bookingData) {
    // Verificar si el evento existe
    const event = await Event.findByPk(bookingData.event_id);
    if (!event) {
      throw new Error('El evento especificado no existe');
    }

    // Verificar disponibilidad de tickets
    const existingBookings = await this.getBookingsByEvent(bookingData.event_id);
    const totalBookedTickets = existingBookings.reduce((total, booking) => total + booking.num_tickets, 0);
    const availableTickets = event.capacity - totalBookedTickets;

    if (bookingData.num_tickets > availableTickets) {
      throw new Error(`No hay suficientes tickets disponibles. Disponibles: ${availableTickets}`);
    }

    return await Booking.create(bookingData);
  }

  // Eliminar una reserva
  async deleteBooking(id) {
    const booking = await Booking.findByPk(id);
    if (!booking) return false;

    await booking.destroy();
    return true;
  }
}

module.exports = new BookingService();