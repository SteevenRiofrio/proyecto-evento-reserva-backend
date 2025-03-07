const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { validateCreateBooking } = require('../middlewares/bookingValidation');

router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.get('/event/:eventId', bookingController.getBookingsByEvent);
router.post('/', validateCreateBooking, bookingController.createBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;