const bookingService = require('../services/bookingService');

class BookingController {
  // Obtener todas las reservas
  async getAllBookings(req, res) {
    try {
      const bookings = await bookingService.getAllBookings();
      return res.status(200).json(bookings);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener una reserva por ID
  async getBookingById(req, res) {
    try {
      const { id } = req.params;
      const booking = await bookingService.getBookingById(id);
      
      if (!booking) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      
      return res.status(200).json(booking);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener reservas por evento
  async getBookingsByEvent(req, res) {
    try {
      const { eventId } = req.params;
      const bookings = await bookingService.getBookingsByEvent(eventId);
      return res.status(200).json(bookings);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Crear una nueva reserva
  async createBooking(req, res) {
    try {
      const booking = await bookingService.createBooking(req.body);
      return res.status(201).json(booking);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Eliminar una reserva
  async deleteBooking(req, res) {
    try {
      const { id } = req.params;
      const deleted = await bookingService.deleteBooking(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      
      return res.status(200).json({ message: 'Reserva eliminada exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new BookingController();